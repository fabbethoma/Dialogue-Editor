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
    toggleEditExchange = (exchangeID = null) => {
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

                const arrayID = scenariosObject.exchanges
                scenariosObject['uid'] = this.props.history.location.state.selectedScenario;

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
        if (this.props.history.location.state) {
        this.props.firebase.scenario(this.props.history.location.state.selectedScenario).off();
    }
    }
   
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

    }
    

    render() {
        const {scenarios, companyName, description ,exchangeLoad, exchanges} = this.state;
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
                               
                                <Exchange scenarioID={this.state.scenario.uid} />
                            {/* {this.state.whichWorkspace ? 
                                <WorkspaceUser isOpen={this.showToggleUser}  charSelect={this.swichWorkspace}/> :
                                    <CharacterWorkSpace isOpen={this.showToggleUser} okFunction={this.swichWorkspace}/>
                        } */}
                        </div>: null}
                        {this.state.scenario && this.state.editExchange && <ExchangeEdit scenarioID={this.state.scenario.uid} exchangeID={this.state.editExchange} toggleEditExchange={this.toggleEditExchange} />}
                        { (this.state.scenario && this.state.scenario.exchanges) && <ExchangeList scenarioID={this.state.scenario.uid} exchanges={this.state.scenario.exchanges} toggleEditExchange={this.toggleEditExchange} /> }

                    </STYLES.WorkspaceDiv>
                </STYLES.DivWorkspace>
            </STYLES.WorkspacePage>
        );
    }
}

export default withFirebase(withRouter(Workspace));
