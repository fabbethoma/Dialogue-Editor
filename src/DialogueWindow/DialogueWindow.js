import React, { Component } from 'react';
import { LogoImg, 
    ContainerDiv,
    Title,SecondTitle,
    DivLabelInput,
    InputText,
    Input,
    DivInput,
    TextArea,
    RolesIcon,
    RolesStyledLink,
    NextLink,
    Label,
    UploadLabel} from './styledDialogueWindow'
import SproutLogo from '../DialogueWindow/sprout_logo.png'
import RolesId from '../Page/images/address-card-regular.svg'
import UserRoleImg from '../Page/images/user-solid.svg'
import UserRoleAgentImg from '../Page/images/user-tie-solid.svg'
import RolesPopup from './PopUp'
import * as ROUTES from '../routes'

const theme = {
    main: '#FFA248',
    invert : 'invert(0)'
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
                <LogoImg src={SproutLogo} alt="sprout-logo" />

                <ContainerDiv>
                    <Title>Diaglog Editor</Title>
                    <SecondTitle>Title of Scenario</SecondTitle>

                    <DivLabelInput>
                        <InputText> Company name: </InputText>
                        <DivInput theme={{ main: '#59D87F96' }}>
                            <Input id="Title" placeholder="Type here..."></Input>
                        </DivInput>
                    </DivLabelInput>

                    <DivLabelInput>
                        <InputText> Description: </InputText>
                        <TextArea id="Description" placeholder="Type here..."></TextArea>
                    </DivLabelInput>
                    <DivLabelInput>
                        <InputText>Select Roles:</InputText>
                        <DivInput theme={{ main: '#FD7582' }}>
                            {userPopup ? <RolesPopup/> : null}
                            
                            <Input title='roles-input' placeholder="User : Type here..."></Input>
                            <RolesIcon onClick={this.UserIconClicked} theme={{ invert: 'invert(0.27)' }} src={UserRoleImg}></RolesIcon>
                            <RolesStyledLink to={ROUTES.ROLES}>
                                <RolesIcon src={RolesId} ></RolesIcon>
                                <p>Add Roles</p>
                            </RolesStyledLink>
                        </DivInput>
                    </DivLabelInput>
                    <DivLabelInput>

                        <DivInput id='start' theme={{ main: '#6BD6D2' }}>
                            {agentPopup ? <RolesPopup /> : null}   
                           
                            <Input title='roles-input' placeholder="Agent: Type here..."></Input>
                            <RolesIcon id='padding' onClick={this.AgentIconClicked} theme={{ invert: 'invert(0.27)' }} src={UserRoleAgentImg}></RolesIcon>
                        </DivInput>
                    </DivLabelInput>

                    <InputText>Picture:</InputText>
                    <DivInput theme={theme}>
                        <Label>Upload Image</Label>
                        <Input id='file-upload' type='file' accept='image/*' />
                        <UploadLabel htmlFor='file-upload'>Upload Image</UploadLabel>
                    </DivInput>

                    <br></br>
                    <NextLink to={ROUTES.WORKSPACE}>Next</NextLink>
                    {/*   
                <RoleSelection>
                <OptionSelect value="0"> Player </OptionSelect>
                <OptionSelect value="1"> Virtual Character </OptionSelect>
                </RoleSelection>
        */}
                </ContainerDiv>
            </>
        )
    }
}
 
