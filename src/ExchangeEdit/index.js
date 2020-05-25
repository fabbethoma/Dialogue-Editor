import React, {Component} from 'react'
// import Form from 'form-js'
import { withFirebase } from '../Firebase';
import Select from 'react-select'

import AudioRecorder from '../AudioRecorder';

import * as STYLES from '../Exchange/styledExchange'

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
  }),
}

const INITIAL_STATE = {
  role : '',
  text: '',
  mood: '',
};

class ExchangeEdit extends Component {
  constructor(props) {
      super(props)
  
      this.state = props.exchange
  }
  

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  selectHandler = (e) => {
    this.setState({ ['mood']: e.label })
  }

  getSelected = (e) => {
    let selected = e.label; 
  }

 handleRemoveClick = index => { 
     
 }

  handleAddClick = () => {
      
  }

  handleSubmit = (e) => {
    console.log("EE hS ran")
    const { role, text, mood } = this.state;
    const exchange = { role, text, mood };
    let scenarioID;
    Object.keys(this.props.exchange.scenarios).forEach(item => scenarioID = item)
    
    console.log(scenarioID)
    console.log(this.props.exchange)
    exchange['exchangeOrder'] = this.props.exchange.exchangeOrder
    exchange['scenarios'] = { [`${scenarioID}`]: true }
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
    const { role, text, mood } = this.state
    const { toggleEditExchange } = this.props
    const OptionValue = {
      label : mood,
      value : mood
    }
    return (
      <STYLES.DivExchange>
          <h3>EDIT MODE</h3>
        <STYLES.FormExchange onSubmit={this.handleSubmit}>
        <STYLES.Label>Role: </STYLES.Label>
          <STYLES.TextInput name='role' type="text" onChange={this.onChange} value={role} />
        <STYLES.Label>Text: </STYLES.Label>
          <STYLES.TextInput name='text' onChange={this.onChange} value={text} placeholder='Type here...' />
         <STYLES.Label>Mood: </STYLES.Label>
         <Select 
            options={INITIAL_MOOD_STATE}
            styles={customStyles}
            onChange={this.selectHandler}
            value={OptionValue}
          />

        <br/>
        <AudioRecorder {...this.props} />
        
        <STYLES.Submit type="submit" value="MODIFY" />
        <STYLES.CancelButton type="button" value="CANCEL" onClick={() => toggleEditExchange()} />
       </STYLES.FormExchange>

      </STYLES.DivExchange>  
    )
  }
}

export default withFirebase(ExchangeEdit);