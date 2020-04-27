import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { Edit } from '@styled-icons/boxicons-solid/Edit'
import { User } from '@styled-icons/boxicons-solid/User'

export const LogoImg = styled.img`
    width: 330px;
    height: 160px;
    padding:0.5rem;
`
export const FullPage = styled.div`
    display:flex;
    height: 100vh;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
`
export const RolesSelsect = styled.div`
`
export const LargeDiv = styled.div`
    background-color: #6BD6D2;
    height:70vh;
    width:70vw;
    border-radius:0.5rem;
    border:1px solid #7e7e7e;
`;
export const LargeDivTitle = styled.h1`
    color: #765CF6;
    text-align:center;
    font-size: 1.8rem;
    font-family: Montserrat;
    font-weight: 500;
    margin: 0;
    padding: .5rem;
`
export const AllRoles = styled.div`
    display:flex;
    flex-direction:row;
    justify-content:space-around;
`
export const RolesUser = styled.div`
    background-color:white;
    height: 53vh;
    width: 30vw;
    display: flex;
    justify-content: flex-start;
    border:3px solid #c3c3c380;
    flex-direction: column;
`
export const Image = styled.div`

`
export const Text = styled.div`
padding: 10px;
border-top:3px solid #c3c3c380;
border-bottom:3px solid #c3c3c380;
`
export const Mood = styled.div`
padding:10px 0;
display:flex;
flex-direction:row;
align-items:center;
justify-content: start;
`
export const StyledLink = styled(Link)`
    margin: 1rem;
    border-radius:1rem;
    color:#765CF6;
    text-decoration:none;
    font-family: Montserrat;
    font-weight: 800;
    font-size: 1.4rem;
`
export const StyledH3 = styled.h3`
    font-family: Montserrat;
    color:#FD7582;
    margin:0;
    font-size: 20px;
`
export const UserLogo = styled(User)`
color:#000000;
width: 100%;
    height: 200px;
    align-self: center;
        padding: 10px 0;
`;

export const RoleInput = styled.h5`
 font-family: Montserrat;
 margin:0;
`;

export const DescriptionRoles = styled.p`
margin:0;
 font-family: Montserrat;
     font-size: 13px;
`

export const EditIconStyle = styled(Edit)`
height:40px;
width:40px;
color:#7e7e7e;
padding:0 10px;
`
export const MoodText = styled(DescriptionRoles)`
font-size: 15px;
color:#7e7e7e;
    padding: 0 1px;
`
export const MoodInput = styled.input`
outline:none;
width:50%;
font-size: 15px;
padding:0;
color: #7e7e7e;
font-family: Montserrat;
::placeholder,::-webkit-input-placeholder {
  color: #7e7e7e;
}
`;