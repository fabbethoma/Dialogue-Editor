import React, { Component } from 'react'
import Select from 'react-select'
// import Form from 'form-js'
import { withFirebase } from '../Firebase';

import * as STYLES from './styledExchange'

const INITIAL_MOOD_STATE = [
  { value: 'neutral', label: 'Neutral' }, 
  { value: 'unaffected', label: 'Unaffected' }, 
  { value: 'happy', label: 'Happy' }, 
  { value: 'interested', label: 'Interested' }, 
  { value: 'inDoubt', label: 'In doubt' }, 
  { value: 'bored', label: 'Bored' }, 
  { value: 'irritated', label: 'Irritated' },
]

const customStyles = {
  option: (provided, state) => ({
    ...provided,
    borderRadius: '20px',
    '&:hover': {
      backgroundColor: '#D9D9D9',
    }
  }),
  menu: (provided, state) => ({
    ...provided,
    borderRadius: '20px',
    '&:focus': {
      outline: 'none',
    }
  })
}

const INITIAL_STATE = {
  role : '', 
  text: '',
  mood: '',
};

class Exchange extends Component {
  constructor(props) {
      super(props)
  
      this.state = INITIAL_STATE
  }
  
  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }
  
  selectHandler = (e) => {
    this.setState({ ['mood']: e.label })
  }
  
 handleRemoveClick = index => { 
     
 }

  handleAddClick = () => {
      
  }

  handleSubmit = (e) => {
    const exchange = this.state
    exchange['scenarios'] = { [this.props.scenarioID]: true }
    
    e.preventDefault();
    const ref = this.props.firebase.exchanges().push(exchange);
    this.setState(INITIAL_STATE)
    console.log(ref.key)
    this.props.firebase.scenario(this.props.scenarioID).child('exchanges').update({ [ref.key]: true })
  // TODO: add the exchange key we just made to current scenario
}


  render() {
    //const { onSubmit,onChange} = this.props
    const { role, text, mood } = this.state
    
    return (
      <STYLES.DivExchange>
        <STYLES.FormExchange onSubmit={this. handleSubmit}>
        <STYLES.Label>Role: </STYLES.Label>
          <STYLES.TextInput name='role' type="text" onChange={this.onChange} value={role} placeholder='Type your role here...'/>
        <STYLES.Label>Text: </STYLES.Label>
          <STYLES.TextArea name='text' onChange={this.onChange} value={text} placeholder='Dialogue goes here...' />
         <STYLES.Label>Mood: </STYLES.Label>
        {/* <STYLES.TextInput name='mood' onChange={this.onChange} value={mood} placeholder='Question here...' /> */}

        {/* <STYLES.SelectMenu name='mood' onChange={this.onChange}>
          <STYLES.Option value={neutral}> Neutral </STYLES.Option>
          <STYLES.Option value={unaffected}> Unaffected </STYLES.Option>
          <STYLES.Option value={happy}> Happy </STYLES.Option>
          <STYLES.Option value={interested}> Interested </STYLES.Option>
          <STYLES.Option value={inDoubt}> In doubt </STYLES.Option>
          <STYLES.Option value={bored}> Bored </STYLES.Option>
          <STYLES.Option value={irritated}> Irritated </STYLES.Option>
        </STYLES.SelectMenu> */}
          <Select 
            options={INITIAL_MOOD_STATE}
            styles={customStyles}
            onChange={this.selectHandler}
          />

          
        <STYLES.Submit type="submit" value="Save" />
       </STYLES.FormExchange>
      </STYLES.DivExchange>                        
    )
  }
}

export default withFirebase(Exchange);