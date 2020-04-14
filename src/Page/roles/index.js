import React from 'react';
import Logo from '../../DialogueWindow/sprout_logo.png'
import UserIcon from '../images/user-solid.svg'
import EditIcon from '../images/edit-solid.svg'
import * as ROUTES from '../../routes'
import {
    FullPage,
    LargeDiv,
    RolesUser,
    Text,
    Mood,
    LargeDivTitle,
    LogoImg,
    AllRoles,
    StyledLink,
    StyledH3,
    UserLogo,
    RoleInput,
    DescriptionRoles,
    EditIconStyle,
    MoodText
} from './styleRoles';

const Roles = () => {
    return (
        <FullPage>
            <LogoImg src={Logo} alt='sprout logo' />
            <LargeDiv>
                <LargeDivTitle>Create your own Roles</LargeDivTitle>
                <AllRoles>
                    <RolesUser>
                        <UserLogo src={UserIcon} />
                        <Text>
                            <StyledH3>
                                Player
                    </StyledH3>
                            <RoleInput>Employer</RoleInput>
                            <DescriptionRoles>Description Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</DescriptionRoles>
                            
                        </Text>
                        <Mood>
                            <EditIconStyle src={EditIcon} />
                            <MoodText>Mood: Happy</MoodText>
                        </Mood>
                    </RolesUser>
                    <RolesUser>
                        <UserLogo src={UserIcon} />
                        <Text>
                            <StyledH3>
                                VR Character
                    </StyledH3>
                            <RoleInput>Coworker</RoleInput>
                            <DescriptionRoles>Description Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor </DescriptionRoles>
                      
                        </Text>
                          <Mood>
                            <EditIconStyle src={EditIcon} />
                            <MoodText>Mood: Happy</MoodText>
                        </Mood>
                    </RolesUser>
                </AllRoles>

            </LargeDiv>
            <StyledLink to={ROUTES.APP} >Go Back</StyledLink>
        </FullPage>
    );
}

export default Roles;