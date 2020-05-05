import React, { Component } from 'react';
import * as STYLES from './styledDialogueWindow'
import SproutLogo from '../DialogueWindow/sprout_logo.png'
import RolesPopup from './PopUp'
import * as ROUTES from '../routes'
import { withRouter } from 'react-router'

import { withFirebase } from '../Firebase';

const theme = {
    main: '#FFA248',
}

class DiaglogueWindow extends Component {
    constructor(props) {
        super(props);
        this.state = {
            agentPopup: false,
            userPopup: false,
            loading: false,
            scenarios: [],
            companyName: '',
            description: ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    UserIconClicked = (event) => {
        event.preventDefault();
        const changeState = !this.state.userPopup
        this.setState({ userPopup: changeState, agentPopup: false })
    }
    AgentIconClicked = (event) => {
        event.preventDefault();
        const changeState = !this.state.agentPopup
        this.setState({ agentPopup: changeState, userPopup: false })
    }
    componentDidMount() {
        this.setState({ loading: true });
        this.props.firebase.scenarios().on('value', snapshot => {
            const scenariosObject = snapshot.val();
            if (scenariosObject) {
                const scenariosList = Object.keys(scenariosObject).map(key => ({
                    ...scenariosObject[key],
                    uid: key,
                }));
                this.setState({
                    scenarios: scenariosList,
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
    componentWillUnmount() {
        this.props.firebase.scenarios().off();
    }
    handleChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }
    handleSubmit(e) {
        const { companyName, description } = this.state
        console.log(this.state);
        e.preventDefault();
        this.props.firebase.scenarios().push({
            companyName,
            description
        });
        this.setState({
            companyName: '',
            description: ''
        })
    }
    onRemoveScenario = uid => {
        this.props.firebase.scenario(uid).remove();
    };
    loadScenario(uid) {
        this.props.history.push({
            pathname: ROUTES.WORKSPACE,
            search: '',
            state: { selectedScenario: uid }
        })
    }
    render() {
        const { agentPopup, userPopup, scenarios, companyName, description } = this.state
        return (
            <>

                <STYLES.LogoImg src={SproutLogo} alt="sprout-logo" />
                <STYLES.Title>Dialog Editor</STYLES.Title>
                <STYLES.ContainerDiv>
                        <div>

                        </div>
                        <div>

                        </div>
                    
                    <STYLES.SecondTitle> Create Your Scenario: </STYLES.SecondTitle>
                    <STYLES.FormStyle onSubmit={this.handleSubmit}>
                        <STYLES.DivLabelInput>
                            <STYLES.InputText> Company name: </STYLES.InputText>
                            <STYLES.DivInput theme={{ main: '#59D87F96' }}>
                                <STYLES.Input name="companyName" value={companyName} onChange={this.handleChange} placeholder="Type here..."></STYLES.Input>
                            </STYLES.DivInput>
                        </STYLES.DivLabelInput>

                        <STYLES.DivLabelInput>
                            <STYLES.InputText> Description: </STYLES.InputText>
                            <STYLES.TextArea name="description" value={description} onChange={this.handleChange} placeholder='Example: "Get ready for an interview" '></STYLES.TextArea>
                        </STYLES.DivLabelInput>
                        <STYLES.DivLabelInput>
                            <STYLES.InputText>Select Roles:</STYLES.InputText>
                            <STYLES.DivInput theme={{ main: '#FD7582' }}>
                                {userPopup ? <RolesPopup /> : null}

                                <STYLES.RolesInput placeholder="User : Type here..."></STYLES.RolesInput>
                                <STYLES.RolesIcon onClick={this.UserIconClicked} theme={theme}></STYLES.RolesIcon>
                                <STYLES.RolesStyledLink to={ROUTES.ROLES}>
                                    <STYLES.UserIDCard />
                                    <p>Add Roles</p>
                                </STYLES.RolesStyledLink>
                            </STYLES.DivInput>
                        </STYLES.DivLabelInput>
                        <STYLES.DivLabelInput>

                            <STYLES.DivAgentInput id='start' theme={{ main: '#6BD6D2' }}>
                                {agentPopup ? <RolesPopup /> : null}

                                <STYLES.RolesInput placeholder="Agent: Type here..."></STYLES.RolesInput>
                                <STYLES.RolesIconAgent id='padding' onClick={this.AgentIconClicked} theme={theme} ></STYLES.RolesIconAgent>
                            </STYLES.DivAgentInput>
                        </STYLES.DivLabelInput>

                        <STYLES.InputText>Picture:</STYLES.InputText>
                        <STYLES.DivInput theme={theme}>
                            <STYLES.Label>Upload Image</STYLES.Label>
                            <STYLES.Input id='file-upload' type='file' accept='image/*' />
                            <STYLES.UploadLabel htmlFor='file-upload'>Upload Image</STYLES.UploadLabel>
                        </STYLES.DivInput>

                        <br></br>
                        {/* <STYLES.NextLink to={ROUTES.WORKSPACE}>Next</STYLES.NextLink> */}
                        <STYLES.NextLink as='input' type="submit" value="Create" />
                    </STYLES.FormStyle>
                    {/*   
                <RoleSelection>
                <OptionSelect value="0"> Player </OptionSelect>
                <OptionSelect value="1"> Virtual Character </OptionSelect>
                </RoleSelection>
        */}
                    <STYLES.EmptyContainer></STYLES.EmptyContainer>
                    <STYLES.ScenarioContainerTitle> Your Scenarios</STYLES.ScenarioContainerTitle>
                    <STYLES.ScenarioTitle>{scenarios && scenarios.map((scenario, index) => <p onClick={() => this.loadScenario(scenario.uid)} key={index}>{scenario.companyName}: {scenario.description}</p>)} </STYLES.ScenarioTitle>
                </STYLES.ContainerDiv>  
            </>
        )
    }
}

export default withFirebase(withRouter(DiaglogueWindow))
