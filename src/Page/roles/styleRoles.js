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
    display: flex;
    justify-content: flex-start;
    border:3px solid #c3c3c380;
    flex-direction: column;
`
const Image = styled.div`

`
const Text = styled.div`
padding: 10px;
border-top:3px solid #c3c3c380;
border-bottom:3px solid #c3c3c380;
`
const Mood = styled.div`
padding:10px 0;
display:flex;
flex-direction:row;
align-items:center;
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
    margin:0;
    font-size: 20px;
`
const UserLogo = styled.img`
width: 100%;
    height: 200px;
    align-self: center;
        padding: 10px 0;
`;

const RoleInput = styled.h5`
 font-family: Montserrat;
 margin:0;
`;

const DescriptionRoles = styled.p`
margin:0;
 font-family: Montserrat;
     font-size: 13px;
`

const EditIconStyle = styled.img`
height:40px;
width:40px;
padding:0 10px;
`
const MoodText = styled(DescriptionRoles)`
font-size: 15px;
color:#7e7e7e;
`
export {
    FullPage,
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
    StyledH3,
    UserLogo,
    RoleInput,
    DescriptionRoles,
    EditIconStyle,
    MoodText
}