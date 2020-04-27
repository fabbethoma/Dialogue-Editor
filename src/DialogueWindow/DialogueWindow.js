import React, { Component } from 'react';
import * as STYLES from './styledDialogueWindow'
import SproutLogo from '../DialogueWindow/sprout_logo.png'
import RolesPopup from './PopUp'
import * as ROUTES from '../routes'

const theme = {
    main: '#FFA248',
}

export default class DiaglogueWindow extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            agentPopup : false,
            userPopup : false
         }
    }
    UserIconClicked = (event) => {
        event.preventDefault();
        const changeState = !this.state.userPopup
        this.setState({userPopup : changeState, agentPopup : false})
    }
    AgentIconClicked = (event) => {
        event.preventDefault();
        const changeState = !this.state.agentPopup
        this.setState({agentPopup : changeState , userPopup : false})
    }
    render() { 
        const {agentPopup, userPopup} = this.state
        return (
            <>
                <STYLES.LogoImg src={SproutLogo} alt="sprout-logo" />

                <STYLES.ContainerDiv>
                    <STYLES.Title>Diaglog Editor</STYLES.Title>
                    <STYLES.SecondTitle>Title of Scenario</STYLES.SecondTitle>

                    <STYLES.DivLabelInput>
                        <STYLES.InputText> Company name: </STYLES.InputText>
                        <STYLES.DivInput theme={{ main: '#59D87F96' }}>
                            <STYLES.Input id="Title" placeholder="Type here..."></STYLES.Input>
                        </STYLES.DivInput>
                    </STYLES.DivLabelInput>

                    <STYLES.DivLabelInput>
                        <STYLES.InputText> Description: </STYLES.InputText>
                        <STYLES.TextArea id="Description" placeholder="Type here..."></STYLES.TextArea>
                    </STYLES.DivLabelInput>
                    <STYLES.DivLabelInput>
                        <STYLES.InputText>Select Roles:</STYLES.InputText>
                        <STYLES.DivInput theme={{ main: '#FD7582' }}>
                            {userPopup ? <RolesPopup/> : null}
                            
                            <STYLES.Input title='roles-input' placeholder="User : Type here..."></STYLES.Input>
                            <STYLES.RolesIcon onClick={this.UserIconClicked} theme={theme}></STYLES.RolesIcon>
                            <STYLES.RolesStyledLink to={ROUTES.ROLES}>
                                <STYLES.UserIDCard />
                                <p>Add Roles</p>
                            </STYLES.RolesStyledLink>
                        </STYLES.DivInput>
                    </STYLES.DivLabelInput>
                    <STYLES.DivLabelInput>

                        <STYLES.DivInput id='start' theme={{ main: '#6BD6D2' }}>
                            {agentPopup ? <RolesPopup /> : null}   
                           
                            <STYLES.Input title='roles-input' placeholder="Agent: Type here..."></STYLES.Input>
                            <STYLES.RolesIconAgent id='padding' onClick={this.AgentIconClicked} theme={theme} ></STYLES.RolesIconAgent>
                        </STYLES.DivInput>
                    </STYLES.DivLabelInput>

                    <STYLES.InputText>Picture:</STYLES.InputText>
                    <STYLES.DivInput theme={theme}>
                        <STYLES.Label>Upload Image</STYLES.Label>
                        <STYLES.Input id='file-upload' type='file' accept='image/*' />
                        <STYLES.UploadLabel htmlFor='file-upload'>Upload Image</STYLES.UploadLabel>
                    </STYLES.DivInput>

                    <br></br>
                    <STYLES.NextLink to={ROUTES.WORKSPACE}>Next</STYLES.NextLink>
                    {/*   
                <RoleSelection>
                <OptionSelect value="0"> Player </OptionSelect>
                <OptionSelect value="1"> Virtual Character </OptionSelect>
                </RoleSelection>
        */}
                </STYLES.ContainerDiv>
            </>
        )
    }
}
 
