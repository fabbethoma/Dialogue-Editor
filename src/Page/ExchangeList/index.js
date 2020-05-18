import React, {Component} from 'react'
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
      editExchange: null 
    }

  }
  toggleEditExchange = (exchangeID = null) => {
    console.log("tEE ran " + exchangeID)

    this.setState({ editExchange: exchangeID})
}
  componentDidMount () {

    // this.props.exchanges : {-M7D9_kEGnRWODa19EJS: true, -M7D9kEEmH1H3lQ
    
    this.props.firebase.exchanges().on('value', snapshot => {
        const exchangesObj = snapshot.val();
      let exchangesList = Object.keys(exchangesObj).map(key => {
         // if (validExchanges.includes(key)) {
          return ({
        ...exchangesObj[key],
        uid: key,
        })
        /*
          } else {
              return null;
          }
          */
      });
      //console.log(exchangesList)
      //exchangesList = exchangesList.filter(Boolean)
      //console.log(exchangesList)
      this.setState({
        exchanges: exchangesList,

      });
});
  }
  componentWillUnmount () {
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

  deleteExchange = (event) => {
    event.preventDefault();
    const keyID = event.target.id // check out element.closest()
    const getUid = this.props.scenarioID
    console.log(keyID);
    const idKey = Object.keys(this.props.exchanges)[keyID]
    const Obj = this.state.exchanges

    const r = window.confirm("Are you sure you want to delete this exchange?");


    if (r == true){
      Object.keys(Obj).reduce((object, key) => {
        if (key !== keyID) {
          object[key] = Obj[key]
        }
        return object
      }, {})
      this.props.firebase.exchange(idKey).remove().then(value => {
          this.props.firebase.scenarioExchange(getUid).child(`/${idKey}`).remove()
      })
    }
  } 


  render() {
    //const { onSubmit,onChange} = this.props
    const validExchanges = Object.keys(this.props.exchanges);
    return (
      <div>

        {this.state.exchanges ? this.state.exchanges.filter(ex => validExchanges.includes(ex.uid)).map((item,key) => (
            <STYLES.exchangeDiv key={key}>
                <STYLES.SpanExchange><STYLES.editButton onClick={() => this.toggleEditExchange(item.uid)}> EDIT </STYLES.editButton> 
                Role: {item.role}
              <STYLES.deleteButton id={key} onClick={this.deleteExchange}> X </STYLES.deleteButton>
                </STYLES.SpanExchange>
                {/* <STYLES.p>Role: {item.role}</STYLES.p> */}
                <STYLES.p> <b>Text: </b> {item.text}</STYLES.p>
                <STYLES.p> <b>Mood: </b> {item.mood}</STYLES.p>
                
                {/* <AudioPlayer url={item.audio} /> */}
                {/* <STYLES.deleteButton onClick={this.deleteExchange}> X </STYLES.deleteButton> */}

                <h5 style={{paddingLeft: '10px'}}> Exchange key {key + 1 } </h5>
            </STYLES.exchangeDiv>
        )) : null}
        {this.state.editExchange && <ExchangeEdit key={this.state.editExchange} exchange={this.state.exchanges.find(ex => ex.uid === this.state.editExchange)} exchangeID={this.state.editExchange} toggleEditExchange={this.toggleEditExchange} />}


      </div>                        
    )
  }
}

export default withFirebase(ExchangeList);