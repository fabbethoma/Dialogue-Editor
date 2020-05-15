import React, {Component} from 'react'
// import Form from 'form-js'
import { withFirebase } from '../Firebase';

import AudioRecorder from '../AudioRecorder';

import * as STYLES from '../Exchange/styledExchange'


const INITIAL_STATE = {
  data : '', // ändra till de riktiga variablerna (ex: agent, content och mood)
  type: '',
  question: '',
  answer: ''
};

class ExchangeEdit extends Component {
  constructor(props) {
      super(props)
  
      this.state = props.exchange
  }
  

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

 handleRemoveClick = index => { 
     
 }

  handleAddClick = () => {
      
  }

  handleSubmit = (e) => {
    console.log("EE hS ran")
    const { answer, data, question, type } = this.state
    const exchange = { data, type, question, answer }

    //exchange['scenarios'] = { [this.props.scenarioID]: true }
    
    e.preventDefault();
    this.props.firebase.exchange(this.props.exchangeID).set(exchange); // change to update
    //this.setState(INITIAL_STATE)
    //console.log(ref.key)
    this.props.toggleEditExchange()
    //this.props.firebase.scenario(this.props.scenarioID).child('exchanges').update({ [ref.key]: true })
  // TODO: add the exchange key we just made to current scenario

  
}

componentDidMount () {

}

// todo: add component did mount which loads exchange from firebase and sets state

// todo: change handlesubmit so that it updates the exchange, see page 171 road to react with firebase

  render() {
    //const { onSubmit,onChange} = this.props
    const { data, type, question, answer } = this.state
    const { toggleEditExchange } = this.props

    return (
      <STYLES.DivExchange>
          <h3>EDIT MODE</h3>
        <STYLES.FormExchange onSubmit={this.handleSubmit}>
        <STYLES.Label>Data: </STYLES.Label>
          <STYLES.TextInput name='data' type="text" onChange={this.onChange} value={data} />
        <STYLES.Label>Type: </STYLES.Label>
          <STYLES.TextInput name='type' onChange={this.onChange} value={type} placeholder='Type here...' />
         <STYLES.Label>Question: </STYLES.Label>
        <STYLES.TextInput name='question' onChange={this.onChange} value={question} placeholder='Question here...' />
        <STYLES.Label>Answer: </STYLES.Label>
        <STYLES.TextInput name='answer' onChange={this.onChange} value={answer} placeholder='Answer here...' />
        <STYLES.Submit type="submit" value="MODIFY" /><STYLES.Submit type="button" value="CANCEL" onClick={() => toggleEditExchange()} />
       </STYLES.FormExchange>
      <AudioRecorder {...this.props} />
      </STYLES.DivExchange>  
    )
  }
}

export default withFirebase(ExchangeEdit);