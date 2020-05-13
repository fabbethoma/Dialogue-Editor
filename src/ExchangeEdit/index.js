import React, {Component} from 'react'
// import Form from 'form-js'
import { withFirebase } from '../Firebase';

import * as STYLES from '../Exchange/styledExchange'


const INITIAL_STATE = {
  data : '',
  type: '',
  question: '',
  answer: ''
};

class ExchangeEdit extends Component {
  constructor(props) {
      super(props)
  
      this.state = INITIAL_STATE
  }
  
  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

 handleRemoveClick = index => { 
     
 }

  handleAddClick = () => {
      
  }

  handleSubmit = (e) => {
    const exchange = this.state
    exchange['scenarios'] = { [this.props.scenarioID]: true }
    
    e.preventDefault();
    const ref = this.props.firebase.exchanges().push(exchange); // change to update
    this.setState(INITIAL_STATE)
    console.log(ref.key)
    this.props.firebase.scenario(this.props.scenarioID).child('exchanges').update({ [ref.key]: true })
  // TODO: add the exchange key we just made to current scenario

  
}


// todo: add component did mount which loads exchange from firebase and sets state

// todo: change handlesubmit so that it updates the exchange, see page 171 road to react with firebase

  render() {
    //const { onSubmit,onChange} = this.props
    const { data, type, question, answer } = this.state
    return (
      <STYLES.DivExchange>
          <h3>EDIT MODE</h3>
        <STYLES.FormExchange onSubmit={this. handleSubmit}>
        <STYLES.Label>Data: </STYLES.Label>
          <STYLES.TextInput name='data' type="text" onChange={this.onChange} value={data} />
        <STYLES.Label>Type: </STYLES.Label>
          <STYLES.TextInput name='type' onChange={this.onChange} value={type} placeholder='Type here...' />
         <STYLES.Label>Question: </STYLES.Label>
        <STYLES.TextInput name='question' onChange={this.onChange} value={question} placeholder='Question here...' />
        <STYLES.Label>Answer: </STYLES.Label>
        <STYLES.TextInput name='answer' onChange={this.onChange} value={answer} placeholder='Answer here...' />
        <STYLES.Submit type="submit" value="MODIFY" />
       </STYLES.FormExchange>
      </STYLES.DivExchange>                        
    )
  }
}

export default withFirebase(ExchangeEdit);