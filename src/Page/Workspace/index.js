import React, { Component } from 'react';
import * as ROUTES from '../../routes/index'
import * as STYLES from './style'
import WorkspaceUser from '../WorkspaceUser/index.js'
import CharacterWorkSpace from '../CharacterWorkspace'


class Workspace extends Component {
    constructor(props) {
        super(props);
        this.state = {
            disableToggle: true,
            toggleWorkspace: false
        }
    }

    showToggleUser = () => {
        const cond = !this.state.toggleWorkspace;
        this.setState({toggleWorkspace : cond})
    }

    render() {
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
                    <STYLES.DivSidebarButton>
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
                        <STYLES.TitleScenario>Job Interview</STYLES.TitleScenario>
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
                        {this.state.toggleWorkspace ? <WorkspaceUser isOpen={this.showToggleUser} />: null}
                        
                    </STYLES.WorkspaceDiv>
                </STYLES.DivWorkspace>
            </STYLES.WorkspacePage>
        );
    }
}

export default Workspace;
