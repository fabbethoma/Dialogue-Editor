import React, {Component} from 'react';
import Logo from '../../DialogueWindow/sprout_logo.png'
import * as ROUTES from '../../routes'
import * as STYLES from './styleRoles';

class Roles extends Component {
    constructor(props){
        super(props);
        this.state = {
            MoodInput1 : true,
            MoodInput2 : true,
            MoodText1 : '',
            MoodText2 : ''
        }
    }

    HandleChange = (event) => {
        const el = event.target;
        if (el.id === '1'){
            this.setState({MoodText1 : el.value})
        }else if (el.id === '2') {
            this.setState({ MoodText2: el.value })
        }
    }

    ClickIcon = (event) => {
        event.preventDefault();
        const el = event.target;
        if (el.id === 'icon1') {
            const condition = !this.state.MoodInput1
            this.setState({ MoodInput1 : condition })
        } else if (el.id === 'icon2') {
            const condition = !this.state.MoodInput2
            this.setState({ MoodInput2 : condition })
        }   
    }

    render () {
        const {MoodInput1, MoodText1,MoodInput2,MoodText2 } = this.state
        return (
            <STYLES.FullPage>
                <STYLES.LogoImg src={Logo} alt='sprout logo' />
                <STYLES.LargeDiv>
                    <STYLES.LargeDivTitle>Create your own Roles</STYLES.LargeDivTitle>
                    <STYLES.AllRoles>
                        <STYLES.RolesUser>
                            <STYLES.UserLogo />
                            <STYLES.Text>
                                <STYLES.StyledH3>
                                    Player
                    </STYLES.StyledH3>
                                <STYLES.RoleInput>Employer</STYLES.RoleInput>
                                <STYLES.DescriptionRoles>Description Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</STYLES.DescriptionRoles>

                            </STYLES.Text>
                            <STYLES.Mood>
                                <STYLES.EditIconStyle onClick={this.ClickIcon} id='icon1'/>
                                <STYLES.MoodText>Mood:</STYLES.MoodText>
                                {MoodInput1 ? 
                                    <STYLES.MoodText>{MoodText1 === '' ? 'Happy' : MoodText1}</STYLES.MoodText> :  
                                    <STYLES.MoodInput id='1' onChange={this.HandleChange} type='text' placeholder='Happy' value={MoodText1}/> }
                            </STYLES.Mood>
                        </STYLES.RolesUser>
                        <STYLES.RolesUser>
                            <STYLES.UserLogo />
                            <STYLES.Text>
                                <STYLES.StyledH3>
                                    VR Character
                    </STYLES.StyledH3>
                                <STYLES.RoleInput>Coworker</STYLES.RoleInput>
                                <STYLES.DescriptionRoles>Description Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor </STYLES.DescriptionRoles>

                            </STYLES.Text>
                            <STYLES.Mood>
                                <STYLES.EditIconStyle onClick={this.ClickIcon} id='icon2'/>
                                <STYLES.MoodText>Mood:</STYLES.MoodText>
                                {MoodInput2 ?
                                    <STYLES.MoodText>{MoodText2 === '' ?  'Happy' : MoodText2}</STYLES.MoodText> :
                                    <STYLES.MoodInput id='2' onChange={this.HandleChange} type='text' placeholder='Happy' value={MoodText2}/>}
                            </STYLES.Mood>
                        </STYLES.RolesUser>
                    </STYLES.AllRoles>

                </STYLES.LargeDiv>
                <STYLES.StyledLink to={ROUTES.APP} >Go Back</STYLES.StyledLink>
            </STYLES.FullPage>
        )
    }
}


export default Roles;