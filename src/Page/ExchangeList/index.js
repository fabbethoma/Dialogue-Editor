import React, { Component } from "react";
// import Form from 'form-js'
import { withFirebase } from "../../Firebase";

import * as STYLES from "./style";

//import * as STYLES from '../styledExchange'

import ExchangeEdit from "../../ExchangeEdit";

class ExchangeList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      exchanges: null,
      editExchange: null,
    };
  }
  toggleEditExchange = (exchangeID = null) => {
    console.log("tEE ran " + exchangeID);

    this.setState({ editExchange: exchangeID });
  };
  componentDidMount() {
    // this.props.exchanges : {-M7D9_kEGnRWODa19EJS: true, -M7D9kEEmH1H3lQ

    this.props.firebase.exchanges().on("value", (snapshot) => {
      const exchangesObj = snapshot.val();
      if (exchangesObj) {
        const newObj = {};
        Object.values(exchangesObj).filter((item, index) => {
          if (
            Object.keys(item.scenarios).includes(this.props.scenarioID) === true
          ) {
            newObj[Object.keys(exchangesObj)[index]] = item;
          }
          return (
            Object.keys(item.scenarios).includes(this.props.scenarioID) === true
          );
        });

        const sortObj = {};
        const sortKeys = Object.keys(newObj).sort((a, b) =>
          newObj[a].exchangeOrder > newObj[b].exchangeOrder ? 1 : -1
        );
        // console.log(sortKeys)
        sortKeys.forEach(
          (key, index) => (sortObj[Object.keys(newObj)[index]] = newObj[key])
        );
        let exchangesList = Object.keys(sortObj).map((key) => {
          // if (validExchanges.includes(key)) {
          return {
            ...sortObj[key],
            uid: key,
          };
          /*
            } else {
                return null;
            }
            */
        });
        this.setState({
          exchanges: exchangesList,
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
  };

  handleRemoveClick = (index) => {
    //  this.props.firebase.exchanges(index).remove();
  };

  handleEditClick = () => {};
  duplicateHandle = (event) => {
    event.preventDefault();
    const keyID = event.target.id; // check out element.closest()
    console.log(keyID);
    const Obj = this.state.exchanges;
    const objFilter = Object.keys(Obj).reduce((object, key) => {
      if (key === keyID) {
        object[key] = Obj[key];
      }
      return object;
    }, []);
    console.log(objFilter);
    const copyObj = Object.assign({}, ...objFilter);
    delete copyObj.uid;
    delete copyObj.audio;
    delete copyObj.audioFileName;
    copyObj.exchangeOrder = Obj.length;
    console.log(copyObj);
    const ref = this.props.firebase.exchanges().push(copyObj);
    this.props.firebase
      .scenario(this.props.scenarioID)
      .child("exchanges")
      .update({ [ref.key]: true });
  };

  deleteExchange = (event) => {
    event.preventDefault();
    const keyID = event.target.id; // check out element.closest()
    const getUid = this.props.scenarioID;
    console.log(keyID);
    const idKey = Object.keys(this.props.exchanges)[keyID];
    const Obj = this.state.exchanges;
    const updateObj = [];
    const objFilter = Object.keys(Obj).reduce((object, key) => {
      if (key === keyID) {
        object[key] = Obj[key];
      } else {
        updateObj.push(Obj[key]);
      }
      return object;
    }, []);
    const filterObj = [];
    const filtred = Object.assign({}, ...objFilter);
    const boolean = "audioFileName" in filtred;
    console.log(filtred);
    console.log(updateObj);
    if (boolean) {
      const deleteFileName = filtred.audioFileName;

      this.props.firebase
        .audio()
        .child("audio/" + deleteFileName)
        .delete()
        .then(() => {
          this.props.firebase
            .exchange(idKey)
            .remove()
            .then((value) => {
              console.log(value);
              this.props.firebase
                .scenarioExchange(getUid)
                .child(`/${idKey}`)
                .remove();
            });
        })
        .then(() => {
          updateObj.forEach((item, key) => {
            this.props.firebase.exchanges().child(`/${item.uid}`).update({
              exchangeOrder: key,
            });
          });
        });
    } else {
      this.props.firebase
        .exchange(idKey)
        .remove()
        .then(() => {
          this.props.firebase
            .scenarioExchange(getUid)
            .child(`/${idKey}`)
            .remove();
        })
        .then(() => {
          updateObj.forEach((item, key) => {
            this.props.firebase.exchanges().child(`/${item.uid}`).update({
              exchangeOrder: key,
            });
          });
        });
    }
  };

  render() {
    //const { onSubmit,onChange} = this.props
    const validExchanges = Object.keys(this.props.exchanges);
    return (
      <div>
        {this.state.exchanges
          ? this.state.exchanges.map((item, key) => (
              <STYLES.exchangeDiv key={key}>
                <STYLES.SpanExchange>
                  <STYLES.editButton
                    onClick={() => this.toggleEditExchange(item.uid)}
                  >
                    {" "}
                    EDIT{" "}
                  </STYLES.editButton>
                  <STYLES.DuplicateButton
                    id={key}
                    onClick={this.duplicateHandle}
                  >
                    Duplicate
                  </STYLES.DuplicateButton>
                  Role: {item.role}
                  <STYLES.deleteButton id={key} onClick={this.deleteExchange}>
                    {" "}
                    X{" "}
                  </STYLES.deleteButton>
                </STYLES.SpanExchange>
                {/* <STYLES.p>Role: {item.role}</STYLES.p> */}
                <STYLES.p>
                  {" "}
                  <b>Text: </b> {item.text}
                </STYLES.p>
                <STYLES.p>
                  {" "}
                  <b>Mood: </b> {item.mood}
                </STYLES.p>

                {/* <AudioPlayer url={item.audio} /> */}
                {/* <STYLES.deleteButton onClick={this.deleteExchange}> X </STYLES.deleteButton> */}
                {key > 0 ? (
                  <button
                    onClick={this.uppOrder}
                    style={{ width: "80px" }}
                    id={key}
                  >
                    UppOrder
                  </button>
                ) : null}
                {key < this.state.exchanges.length - 1 ? (
                  <button
                    onClick={this.downOrder}
                    style={{ width: "80px" }}
                    id={key}
                  >
                    DownOrder
                  </button>
                ) : null}
                <h5 style={{ paddingLeft: "10px" }}>
                  {" "}
                  Exchange key {key + 1}{" "}
                </h5>
              </STYLES.exchangeDiv>
            ))
          : null}
        {this.state.editExchange && (
          <ExchangeEdit
            key={this.state.editExchange}
            exchange={this.state.exchanges.find(
              (ex) => ex.uid === this.state.editExchange
            )}
            exchangeID={this.state.editExchange}
            toggleEditExchange={this.toggleEditExchange}
          />
        )}
      </div>
    );
  }
}

export default withFirebase(ExchangeList);
