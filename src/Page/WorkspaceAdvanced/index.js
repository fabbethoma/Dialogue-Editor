import React, { Component } from 'react'
import styled from 'styled-components'
import * as STYLES from '../Workspace/style'
import * as ROUTES from '../../routes/index'
import UserBox from '../DialogBox/User.js'
import AgentBox from '../DialogBox/Agent.js'

import { withFirebase } from '../../Firebase';
import { withRouter } from 'react-router'

const Sidebar = styled.div`
background-color: #765CF6;
height:90;
width:100%;
display:flex;
flex-direction:row;
align-items:center;
`

const DivSidebarButton = styled.div`
display:flex;
flex-direction:column;
align-items:center;
padding:0;
cursor:pointer;
`

const SideBarText = styled.p`
margin: 0;
text-align:center;
color:#ffffff;
padding:5px 10px;
font-weight: 900;
font-size: 12px;
`;

const UserCircle = styled.div`
background-color:#FD7582;
width: 35px;
height: 35px;
padding: 10px;
margin: 10px 10px 10px auto;
border-radius:50%;
`


class WorkspaceAdvanced extends Component {
    constructor(props) {
        super(props)

        this.state = {
            disableToggle: true,
            scenario: null
        }
    }
    showToggleUser = () => {
        const cond = !this.state.toggleWorkspace;
        this.setState({ toggleWorkspace: cond })
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
        return (
            <STYLES.WorkspacePage>
                <STYLES.DivWorkspace>
                    <STYLES.DivRowMenue>
                        <STYLES.BackButton to={ROUTES.APP}>
                            <STYLES.LeftArrowStyle />
                            <STYLES.LinkText>Back</STYLES.LinkText>
                        </STYLES.BackButton>
                        <STYLES.TitleScenario>{this.state.scenario && this.state.scenario.description}</STYLES.TitleScenario>
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
                        <UserBox />
                        <AgentBox />
                        {/* {this.state.toggleWorkspace ? <WorkspaceUser isOpen={this.showToggleUser} /> : null} */}

                    </STYLES.WorkspaceDiv>
                    <Sidebar>
                        <DivSidebarButton>
                            <STYLES.CircleStyle style={{ filter: 'brightness(1.5)' }} theme={{ color: '#6BD6D2' }} />
                            <SideBarText>Workspace</SideBarText>
                        </DivSidebarButton>
                        <DivSidebarButton>
                            <STYLES.CircleStyle theme={{ color: '#FD7582' }} />
                            <SideBarText>Dialogues</SideBarText>
                        </DivSidebarButton>
                        <DivSidebarButton>
                            <STYLES.CircleStyle theme={{ color: '#3DCEBD' }} />
                            <SideBarText>Uploads</SideBarText>
                        </DivSidebarButton>
                        <DivSidebarButton>
                            <STYLES.CircleStyle theme={{ color: '#FFD03A' }} />
                            <SideBarText>Settings</SideBarText>
                        </DivSidebarButton>
                        <UserCircle>
                            <STYLES.UserSidebar />
                        </UserCircle>
                    </Sidebar>
                </STYLES.DivWorkspace>

            </STYLES.WorkspacePage>
        )
    }
}

export default withFirebase(withRouter(WorkspaceAdvanced))
