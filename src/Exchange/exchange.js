import React, {Component} from 'react'
// import Form from 'form-js'

import * as STYLES from './styledExchange'


class Exchange extends Component {
  constructor(props) {
      super(props)
  
      this.state = {
           text : ''
      }
  }
  
  handleChange(e) {
    this.setState({ text : e.target.value});
  }

 handleRemoveClick = index => { 
     
 }

  handleAddClick = () => {
      
  }

  render() {

    return (
       <STYLES.DivExchange>
       <STYLES.FormExchange>
         <STYLES.Label> Agent </STYLES.Label>
        <STYLES.TextInput value={this.state.text} name="exchange" type="text" onChange={this.handleChange}></STYLES.TextInput>
        <STYLES.Submit type="submit" value="save"> SAVE </STYLES.Submit>

       </STYLES.FormExchange>
       </STYLES.DivExchange>                        
    )
  }
}

export default Exchange;