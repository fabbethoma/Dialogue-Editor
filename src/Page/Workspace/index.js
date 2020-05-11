import React, { Component } from 'react';
import * as ROUTES from '../../routes/index'
import * as STYLES from './style'
import WorkspaceUser from '../WorkspaceUser/index.js'
import CharacterWorkSpace from '../CharacterWorkspace'
import { withFirebase } from '../../Firebase';
import { withRouter } from 'react-router'
import Exchange from '../../Exchange/exchange.js'


class Workspace extends Component {
    constructor(props) {
        super(props);
        this.state = {
            disableToggle: true,
            toggleWorkspace: false,
            whichWorkspace : true,
            scenarios: []
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

    componentDidMount() {
        if (!this.props.history) {
            console.log(this.props.history)
            return
        }
        console.log(this.props.history.location.state.selectedScenario)
        this.setState({ loading: true });
        this.props.firebase.scenario(this.props.history.location.state.selectedScenario).once('value', snapshot => {
            const scenariosObject = snapshot.val();
            if (scenariosObject) {
                /*                 const scenariosList = Object.keys(scenariosObject).map(key => ({
                                    ...scenariosObject[key],
                                    uid: key,
                                })); */
                this.setState({
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

    

    render() {
        const {scenarios, companyName, description } = this.state;
    
     

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
                                <Exchange />
                            {/* {this.state.whichWorkspace ? 
                                <WorkspaceUser isOpen={this.showToggleUser}  charSelect={this.swichWorkspace}/> :
                                    <CharacterWorkSpace isOpen={this.showToggleUser} okFunction={this.swichWorkspace}/>
                        } */}
                        </div>: null}
                        
                    </STYLES.WorkspaceDiv>
                </STYLES.DivWorkspace>
            </STYLES.WorkspacePage>
        );
    }
}

export default withFirebase(withRouter(Workspace));
