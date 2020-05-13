import React, { Component } from 'react';
import * as ROUTES from '../../routes'
import * as STYLES from './style'
import WorkspaceUser from '../WorkspaceUser'
import CharacterWorkSpace from '../CharacterWorkspace'
import { withFirebase } from '../../Firebase';
import { withRouter } from 'react-router'
import Exchange from '../../Exchange/exchange.js'

import ExchangeList from '../ExchangeList';
import ExchangeEdit from '../../ExchangeEdit';

class Workspace extends Component {
    constructor(props) {
        super(props);
        this.state = {
            disableToggle: true,
            toggleWorkspace: false,
            whichWorkspace : true,
            scenarios: [],
            exchangeLoad: false,
            exchanges : '',
            type : '',
            answer: '',
            question : '',
            data : '',
            editExchange: null
        }
    }
    swichWorkspace = () => {
        const cond = !this.state.whichWorkspace;
        this.setState({ whichWorkspace: cond })
    } 
    showToggleUser = () => {
        const cond = !this.state.toggleWorkspace;
        this.setState({toggleWorkspace : cond})
    }
    toggleEditExchange = (exchangeID) => {
        this.setState({ editExchange: exchangeID})
    }
    componentDidMount() {
        if (!this.props.history) {
            console.log(this.props.history)
            return
        }
        console.log(this.props.history.location.state.selectedScenario)
        this.setState({ loading: true });
        this.props.firebase.scenario(this.props.history.location.state.selectedScenario).on('value', snapshot => {
            const scenariosObject = snapshot.val();
            if (scenariosObject) {
                /*                 const scenariosList = Object.keys(scenariosObject).map(key => ({
                                    ...scenariosObject[key],
                                    uid: key,
                                })); */
                const arrayID = scenariosObject.exchanges
                scenariosObject['uid'] = this.props.history.location.state.selectedScenario;
/* 
                if (scenariosObject.exchanges) {
                    this.props.firebase.exchanges().once('value', snapshot => {
                        const exchangeObj = snapshot.val()
                        const newObj = {}
                        Object.keys(arrayID).forEach(item => {

                            newObj[item] = exchangeObj[item]
                        })
                        this.setState({
                            exchangeLoad: true,
                            exchanges: newObj
                        })
                    })

                } */
                this.setState({
                  //  exchangesID: arrayID,
                    scenario: scenariosObject,
                    loading: false,
                });
            } else {
                this.setState({
                    scenarios: [],
                    loading: false
                })
            }
        });
    }
    componentWillUnmount () {
        this.props.firebase.scenario(this.props.history.location.state.selectedScenario).off();
    }
    /* onChangeExchange = (event)=> {
        this.setState({[event.target.id] : event.target.value})
    }
    
    SubmitExchange = (event) => {
        event.preventDefault();
        const arrayOrder = this.state.scenario.exchangeOrder ? Object.values(this.state.scenario.exchangeOrder) : []
        console.log(arrayOrder);
        
        const Exchangeid = this.props.firebase.exchanges().push({
            data: this.state.data,
            type: this.state.type,
            question : this.state.question,
            answer : this.state.answer,
            scenarios : {
                [this.props.history.location.state.selectedScenario] : true
            }
        })
        console.log(this.state.exchangesID);  
        const newOb = { [Exchangeid.key]: true }
        
        const allObj = { ...this.state.exchangesID, ...newOb}
        arrayOrder.push(Exchangeid.key)
       
        const orderObj = Object.assign({},arrayOrder )
        this.props.firebase.scenarioExchange(this.props.history.location.state.selectedScenario).set({
            ...allObj
        })
        .then(item => {
            this.props.firebase.scenario(this.props.history.location.state.selectedScenario).child('/exchangeOrder').set({
                ...orderObj
            })
        })
    } */
    deleteExchange = (event) =>{
    event.preventDefault();
        
        const id = event.target.parentNode.id
        const array = this.state.scenario.exchangeOrder
      array.splice(event.target.parentNode.id,1)
    console.log(id);
        const idKey = Object.keys(this.state.exchanges)[id]
        const Obj = this.state.exchanges
        const newObj = Object.keys(Obj).reduce((object, key) => {
            if (key !== idKey) {
                object[key] = Obj[key]
            }
            return object
        }, {})
        console.log(newObj);
        // this.props.firebase.exchanges(idKey).child(`/${idKey}`).remove().then(value => {
        //     this.props.firebase.scenarioExchange(this.props.history.location.state.selectedScenario).child(`/${idKey}`).remove()
        // })
    }
    

    render() {
        const {scenarios, companyName, description ,exchangeLoad,exchanges} = this.state;
        return (
            <STYLES.WorkspacePage>
                <STYLES.SideBar>
                    <STYLES.UserCircle>
                        <STYLES.UserSidebar />
                    </STYLES.UserCircle>
                    <STYLES.DivSidebarButton>
                        <STYLES.CircleStyle style={{ filter: 'brightness(1.5)' }} theme={{ color: '#6BD6D2' }} />
                        <STYLES.SideBarText>Workspace</STYLES.SideBarText>
                    </STYLES.DivSidebarButton>
                    <STYLES.DivSidebarButton as='a' href='/dialog'>
                        <STYLES.CircleStyle theme={{ color: '#FD7582' }} />
                        <STYLES.SideBarText>Dialogues</STYLES.SideBarText>
                    </STYLES.DivSidebarButton>
                    <STYLES.DivSidebarButton>
                        <STYLES.CircleStyle theme={{ color: '#3DCEBD' }} />
                        <STYLES.SideBarText>Uploads</STYLES.SideBarText>
                    </STYLES.DivSidebarButton>
                    <STYLES.DivSidebarButton>
                        <STYLES.CircleStyle theme={{ color: '#FFD03A' }} />
                        <STYLES.SideBarText>Settings</STYLES.SideBarText>
                    </STYLES.DivSidebarButton>
                </STYLES.SideBar>
                <STYLES.DivWorkspace>
                    <STYLES.DivRowMenue>
                        <STYLES.BackButton to={ROUTES.APP}>
                            <STYLES.LeftArrowStyle />
                            <STYLES.LinkText>Back</STYLES.LinkText>
                        </STYLES.BackButton>
                        <STYLES.TitleScenario>{this.state.scenario && this.state.scenario.companyName}: {this.state.scenario && this.state.scenario.description }</STYLES.TitleScenario>
                        <STYLES.SwitchDiv>
                            <STYLES.SwitchButton onClick={() => this.setState({ disableToggle: false })} theme={{ switch: '#FF6858' }} style={{ opacity: `${this.state.disableToggle ? '0.5' : '1'} ` }}>
                                <STYLES.SwitchText theme={{ switchColor: '#000000' }}>Advanced</STYLES.SwitchText>
                            </STYLES.SwitchButton>
                            <STYLES.SwitchCircle>
                                <STYLES.SwitchText theme={{ switchColor: '#000000' }}>or</STYLES.SwitchText>
                            </STYLES.SwitchCircle>
                            <STYLES.SwitchButton theme={{ switch: ' #59D87F' }}>
                                <STYLES.SwitchText onClick={() => this.setState({ disableToggle: true })} theme={{ switchColor: '#ffffff' }} style={{ opacity: `${!this.state.disableToggle ? '0.5' : '1'} ` }}>Simple</STYLES.SwitchText>
                            </STYLES.SwitchButton>
                        </STYLES.SwitchDiv>
                    </STYLES.DivRowMenue>
                    <STYLES.WorkspaceDiv>
                        <STYLES.CircleButton onClick={this.showToggleUser}>
                            <STYLES.PlusCircle />
                        </STYLES.CircleButton>
                        {this.state.toggleWorkspace ? 
                        <div>
                                {!this.state.editExchange ?
                                <Exchange scenarioID={this.state.scenario.uid} /> : <ExchangeEdit scenarioID={this.state.scenario.uid} exchangeID={this.state.editExchange} />}
                            {/* {this.state.whichWorkspace ? 
                                <WorkspaceUser isOpen={this.showToggleUser}  charSelect={this.swichWorkspace}/> :
                                    <CharacterWorkSpace isOpen={this.showToggleUser} okFunction={this.swichWorkspace}/>
                        } */}
                        </div>: null}
                        { (this.state.scenario && this.state.scenario.exchanges) && <ExchangeList exchanges={this.state.scenario.exchanges} toggleEditExchange={this.toggleEditExchange} /> }
                        {/*exchangeLoad ? 
                            <div>
                                {Object.values(exchanges).map((item,key) => (
                                    <div key={key} id={key}>
                                        <h4>Exchange key {key+1}</h4>
                                        <p>Data: {item.data}</p>
                                        <p>Type: {item.type}</p>
                                        <p>Question: {item.question}</p>
                                        <p>Answer: {item.answer}</p>
                                        <button onClick={this.deleteExchange} >Delete Exchange</button>
                                    </div>
                                ))}
                            </div>
                                : null*/}
                    </STYLES.WorkspaceDiv>
                </STYLES.DivWorkspace>
            </STYLES.WorkspacePage>
        );
    }
}

export default withFirebase(withRouter(Workspace));
