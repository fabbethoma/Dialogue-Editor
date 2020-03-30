import styled from 'styled-components'
import { Link } from 'react-router-dom'

const LogoImg = styled.img`
    width: 330px;
    height: 160px;
    padding:0.5rem;
`
const FullPage = styled.div`
    display:flex;
    height: 100vh;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
`
const RolesSelsect = styled.div`
`
const LargeDiv = styled.div`
    background-color: #6BD6D2;
    height:70vh;
    width:70vw;
    border-radius:0.5rem;
    border:1px solid #7e7e7e;
`;
const LargeDivTitle = styled.h1`
    color: #765CF6;
    text-align:center;
    font-size: 1.8rem;
    font-family: Montserrat;
    font-weight: 500;
    margin: 0;
    padding: .5rem;
`
const AllRoles = styled.div`
    display:flex;
    flex-direction:row;
    justify-content:space-around;
`
const RolesUser = styled.div`
    background-color:white;
    height: 53vh;
    width: 30vw;
    border-radius: .5rem;
    display: flex;
    justify-content: flex-end;
    flex-direction: column;
`
const Image = styled.div`

`
const Text = styled.div`

`
const Mood = styled.div`

`
const StyledLink = styled(Link)`
    margin: 1rem;
    border-radius:1rem;
    color:#765CF6;
    text-decoration:none;
    font-family: Montserrat;
    font-weight: 800;
    font-size: 1.4rem;
`
const StyledH3 = styled.h3`
    font-family: Montserrat;
    color:#FD7582;
    text-align:center;
`

export  {FullPage, 
        LargeDiv, 
        RolesSelsect,
        RolesUser, 
        Image,
        Text,
        Mood,
        LogoImg,
        LargeDivTitle,
        AllRoles,
        StyledLink,
        StyledH3 
    }