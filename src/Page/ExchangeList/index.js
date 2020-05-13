import React, {Component} from 'react'
// import Form from 'form-js'
import { withFirebase } from '../../Firebase';

//import * as STYLES from '../styledExchange'



class ExchangeList extends Component {
  constructor(props) {
      super(props)
    this.state = { exchanges: null }

  }
  componentDidMount () {

    // this.props.exchanges : {-M7D9_kEGnRWODa19EJS: true, -M7D9kEEmH1H3lQ
    const validExchanges = Object.keys(this.props.exchanges);
    this.props.firebase.exchanges().on('value', snapshot => {
        const exchangesObj = snapshot.val();
      let exchangesList = Object.keys(exchangesObj).map(key => {
          if (validExchanges.includes(key)) {
          return ({
        ...exchangesObj[key],
        uid: key,
        })
          } else {
              return null;
          }
      });
      console.log(exchangesList)
      exchangesList = exchangesList.filter(Boolean)
      console.log(exchangesList)
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
     
 }

  handleEditClick = () => {
      
  }


  render() {
    //const { onSubmit,onChange} = this.props
    
    return (
      <div>

        {this.state.exchanges ? this.state.exchanges.map((item,key) => (
            <div key={key} id={key}>
                <h4 onClick={() => this.props.toggleEditExchange(item.uid)}>Exchange key {key+1}</h4>
                <p>Data: {item.data}</p>
                <p>Type: {item.type}</p>
                <p>Question: {item.question}</p>
                <p>Answer: {item.answer}</p>
                <button onClick={this.deleteExchange} >Delete Exchange</button>
            </div>
        )) : null}

      </div>                        
    )
  }
}

export default withFirebase(ExchangeList);