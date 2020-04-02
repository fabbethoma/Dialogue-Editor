import React from 'react';
import styled from 'styled-components';
import Logo from '../DialogueWindow/sprout_logo.png'
import { Link } from 'react-router-dom'
import * as ROUTES from '../routes'

const FullPage = styled.div`
    display:flex;
    height: 100vh;
    display:flex;
    flex-direction:column;
    align-items:center;
`

const LogoImg = styled.img`
    width: 330px;
    height: 160px;
    padding:0.5rem;
`
const TitleLanding = styled.h1`
color: #7e7e7e;
font-family: Montserrat;
font-size:3rem;
`

const StyledLink = styled(Link)`
    color:#fff;
    margin-top: 25vh;
    background-color:#765CF6;
    border-radius:1rem;
    text-decoration:none;
    font-family: Montserrat;
    font-weight: 800;
    font-size: 1.2rem;
    padding: 0.2rem 1rem;
`

const Landing = () => {
    return (
        <FullPage>
            <LogoImg src={Logo} alt='sprout logo' />
            <TitleLanding>Dialog Editor</TitleLanding>
            <StyledLink to={ROUTES.APP} >Start here</StyledLink>
        </FullPage>
    );
}

export default Landing;