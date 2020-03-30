import React from 'react';
import Logo from '../../DialogueWindow/sprout_logo.png'
import * as ROUTES from '../../routes'
import { FullPage,
        LargeDiv ,
        RolesSelsect, 
        RolesUser, 
        Image, 
        Text,
        Mood,
        LargeDivTitle,
        LogoImg,
        AllRoles,
        StyledLink,
        StyledH3
    } from './styleRoles';

const Roles = () => {
    return ( 
        <FullPage>
            <LogoImg src={Logo} alt='sprout logo' />
            <LargeDiv>
                <LargeDivTitle>Create your own Roles</LargeDivTitle>
                <AllRoles>
                <RolesUser><StyledH3>
                    Player
                    </StyledH3></RolesUser>
                <RolesUser>
                    <StyledH3>
                        VR Character
                    </StyledH3>
                </RolesUser>
                </AllRoles>
                
            </LargeDiv>
            <StyledLink to={ROUTES.APP} >Go Back</StyledLink>
        </FullPage>
    );
}
 
export default Roles;