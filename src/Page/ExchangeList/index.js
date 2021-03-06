import React, { Component } from 'react'
// import Form from 'form-js'
import { withFirebase } from '../../Firebase';

import * as STYLES from './style'

//import * as STYLES from '../styledExchange'

import ExchangeEdit from '../../ExchangeEdit';


class ExchangeList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      exchanges: null,
      editExchange: null,
      deleteProcess : false
    }

  }
  toggleEditExchange = (exchangeID = null) => {
    console.log("tEE ran " + exchangeID)



    this.setState({ editExchange: exchangeID })
  }
  componentDidMount() {

    // this.props.exchanges : {-M7D9_kEGnRWODa19EJS: true, -M7D9kEEmH1H3lQ

    this.props.firebase.exchanges().on('value', snapshot => {
      const exchangesObj = snapshot.val();
      if (exchangesObj) {
        const newObj = {}

        Object.values(exchangesObj).filter((item, index) => {
          if (Object.keys(item.scenarios).includes(this.props.scenarioID) === true) {

            newObj[Object.keys(exchangesObj)[index]] = item
          }
          return Object.keys(item.scenarios).includes(this.props.scenarioID) === true;
        })

        const sortObj = {}
        const sortKeys = Object.keys(newObj).sort((a, b) => newObj[a].exchangeOrder > newObj[b].exchangeOrder ? 1 : -1)
        // console.log(sortKeys)
        sortKeys.forEach((key, index) => sortObj[Object.keys(newObj)[index]] = newObj[key])
        let exchangesList = Object.keys(sortObj).map(key => {
          // if (validExchanges.includes(key)) {
          return ({
            ...sortObj[key],
            uid: key,
          })
          /*
            } else {
                return null;
            }
            */
        });
        this.setState({
          exchanges: exchangesList,
          keysID: sortKeys

        });
      }

      //console.log(exchangesList)
      //exchangesList = exchangesList.filter(Boolean)
      //console.log(exchangesList)
    });
  }
  componentWillUnmount() {
    this.props.firebase.exchanges().off();
  }
  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleRemoveClick = index => {
    //  this.props.firebase.exchanges(index).remove();
  }

  handleEditClick = () => {

  }
  duplicateHandle = (event) => {
    event.preventDefault();
    const keyID = event.target.id // check out element.closest()
    console.log(keyID);
    const Obj = this.state.exchanges
    const objFilter = Object.keys(Obj).reduce((object, key) => {
      if (key === keyID) {
        object[key] = Obj[key]
      }
      return object
    }, [])
    console.log(objFilter)
    const copyObj = Object.assign({}, ...objFilter)
    delete copyObj.uid
    delete copyObj.audio
    delete copyObj.audioFileName
    copyObj.exchangeOrder = Obj.length
    console.log(copyObj)
    const ref = this.props.firebase.exchanges().push(copyObj)
    this.props.firebase.scenario(this.props.scenarioID).child('exchanges').update({ [ref.key]: true })
  }

  deleteExchange = (event) => {
    event.preventDefault();
    this.setState({deleteProcess : true})
    const keyID = event.target.id// check out element.closest()
    const arrayKeys = this.state.keysID
    const getUid = this.props.scenarioID
    const idKey = arrayKeys[parseInt(keyID)]
    const filtredKeys = arrayKeys.filter(keyID => keyID !== idKey)
    const Obj = this.state.exchanges
    const objFilter = Object.keys(Obj).reduce((object, key) => {
      if (key === keyID) {
        object[key] = Obj[key]
      } 
      return object
    }, [])
    const filtred = Object.assign({}, ...objFilter)
    const boolean = 'audioFileName' in filtred

    if (boolean) {
      const deleteFileName = filtred.audioFileName

      this.props.firebase.audio().child('audio/' + deleteFileName).delete().then(() => {
        this.props.firebase.exchange(idKey).remove().then(value => {
          console.log(value);
          this.props.firebase.scenarioExchange(getUid).child(`/${idKey}`).remove()
        })
      }).then(() => {
        filtredKeys.forEach((item, key) => {
          this.props.firebase.exchanges().child(`/${item}`).update({
            exchangeOrder: key
          })
        })
      }).then(() => {
        this.setState({ deleteProcess: false })
      })
    } else {
      this.props.firebase.exchange(idKey).remove().then(() => {
        this.props.firebase.scenarioExchange(getUid).child(`/${idKey}`).remove()
      }).then(() => {
        filtredKeys.forEach((item, key) => {
          this.props.firebase.exchanges().child(`/${item}`).update({
            exchangeOrder: key
          })
        })
      }).then(() => {
        this.setState({ deleteProcess: false })
      })
     
    }
  }

  uppOrder = (event) => {
    event.preventDefault();
    const idOrder = event.target.id
    const allKeys = this.state.keysID
    const oldIndex = parseInt(idOrder)
    const newIndex = oldIndex - 1;
    const oldArray = []
    this.state.exchanges.forEach(item => oldArray.push(item.exchangeOrder))
    const newArray = this.ChangeArray(oldArray, oldIndex, newIndex)
    console.log(newArray)
    allKeys.forEach((item, index) => {
      this.props.firebase.exchanges().child(`${item}`).update({
        exchangeOrder: newArray[index]
      })
    })
  }

  downOrder = (event) => {
    event.preventDefault();
    const idOrder = event.target.id
    const allKeys = this.state.keysID
    const oldIndex = parseInt(idOrder)
    const newIndex = oldIndex + 1;
    const oldArray = []
    this.state.exchanges.forEach(item => oldArray.push(item.exchangeOrder))
    const newArray = this.ChangeArray(oldArray, oldIndex, newIndex)
    console.log(newArray)
    allKeys.forEach((item, index) => {
      this.props.firebase.exchanges().child(`${item}`).update({
        exchangeOrder: newArray[index]
      })
    })
  }

  ChangeArray = (arr, old_index, new_index) => {
    while (old_index < 0) {
      old_index += arr.length;
    }
    while (new_index < 0) {
      new_index += arr.length;
    }
    if (new_index >= arr.length) {
      var k = new_index - arr.length;
      while ((k--) + 1) {
        arr.push(undefined);
      }
    }
    arr.splice(new_index, 0, arr.splice(old_index, 1)[0]);
    return arr;
  }
  render() {
    //const { onSubmit,onChange} = this.props
    const validExchanges = Object.keys(this.props.exchanges);
    return (
      <div>

        {this.state.exchanges ? this.state.exchanges.map((item, key) => (
          <STYLES.exchangeDiv key={key}>
            <STYLES.SpanExchange><STYLES.editButton onClick={() => this.toggleEditExchange(item.uid)}> EDIT </STYLES.editButton>
              <STYLES.DuplicateButton  id={key} onClick={this.duplicateHandle} >Duplicate</STYLES.DuplicateButton>
                Role: {item.role}
              <STYLES.deleteButton id={key} onClick={this.deleteExchange} disabled={this.state.deleteProcess} > X </STYLES.deleteButton>
            </STYLES.SpanExchange>
            {/* <STYLES.p>Role: {item.role}</STYLES.p> */}
            <STYLES.p> <b>Text: </b> {item.text}</STYLES.p>
            <STYLES.p> <b>Mood: </b> {item.mood}</STYLES.p>

            {/* <AudioPlayer url={item.audio} /> */}
            {/* <STYLES.deleteButton onClick={this.deleteExchange}> X </STYLES.deleteButton> */}
            {key > 0 ? <STYLES.OrderButton onClick={this.uppOrder} style={{ width: '80px' }} id={key}>Up</STYLES.OrderButton> : null}
            {key < this.state.exchanges.length - 1 ? <STYLES.OrderButton onClick={this.downOrder} style={{ width: '80px' }} id={key}>Down</STYLES.OrderButton> : null}

            <h5 style={{ paddingLeft: '10px' }}> Exchange key {key + 1} </h5>
          </STYLES.exchangeDiv>
        )) : null}
        {this.state.editExchange && <ExchangeEdit key={this.state.editExchange} exchange={this.state.exchanges.find(ex => ex.uid === this.state.editExchange)} exchangeID={this.state.editExchange} toggleEditExchange={this.toggleEditExchange} />}


      </div>
    )
  }
}

export default withFirebase(ExchangeList);