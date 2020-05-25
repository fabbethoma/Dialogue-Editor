import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { LeftArrow } from '@styled-icons/boxicons-regular/LeftArrow'
import { Circle } from '@styled-icons/boxicons-solid/Circle'
import { User } from '@styled-icons/boxicons-solid/User'
import { PlusOutline} from '@styled-icons/evaicons-outline/PlusOutline'

export const WorkspacePage = styled.div`
height:fit-content;
width:100%;
height:100vh;
display:flex;
flex-direction:row;
font-family: 'Montserrat', sans-serif;
color: #454545;
`;

export const SideBar = styled.div`
background-color: #765CF6;
height:100%;
width:90px;
display:flex;
flex-direction:column;
align-items:center;
`

export const BackButton = styled(Link)`
text-decoration:none;
margin:0;
color:#000000;
cursor:pointer;
font-size:30px;
border-radius:20px;
display: flex;
flex-direction: row;
align-items: flex-start;
height: fit-content;
`;

export const LeftArrowStyle = styled(LeftArrow)`
    color:#765CF6;
    height:20px;
`
export const LinkText = styled.p`
font-size:18px;
padding-left:2px;
margin:0;
color: #454545;
justify-content: flex-start;
`
export const DivSidebarButton = styled.div`
display:flex;
flex-direction:column;
align-items:center;
padding:10px 0;
cursor:pointer;
text-decoration:none;
`

export const CircleStyle = styled(Circle)`
color: ${props => props.theme.color};
width: 25px;
height : 25px;
`

export const SideBarText = styled.p`
margin: 0;
text-align:center;
color:#ffffff;
padding:10px 0;
font-weight: 900;
font-size: 12px;
`;


export const TitleScenario = styled.h1`
text-align:center;
margin: 0 auto;
// float: right;
`

export const SwitchDiv = styled.div`
display: flex;
padding:10px;
flex-direction: row;
height: fit-content;
& :first-child{
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
}
& :last-child{
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
}
`

export const SwitchButton = styled.button`
background-color:${props => props.theme.switch};
width: 100px;
margin:0 -7px;
height:24px;
outline:none;
border:none;
`;

const CircleDraw = styled.span`
border-radius:50%;
`

export const SwitchCircle = styled(CircleDraw)`
width: 24px;
height: 24px;
background-color: #ffffff;
z-index:1;
`;

export const SwitchText = styled.p`
font-size:11px;
text-align:center;
margin:5px 0;
font-weight:700;
color:${props => props.theme.switchColor};
`
export const UserSidebar = styled(User)`
color:#ffffff;
`;

export const UserCircle = styled(CircleDraw)`
background-color:#FD7582;
width: 35px;
height: 35px;
padding: 10px;
margin: 10px 0;
`;

export const WorkspaceDiv = styled.div`
height: 100%;
width:100%;
overflow-y: scroll;
`;

export const DivWorkspace = styled.div`
display:flex;
flex-direction:column;
width: 100%;

`

export const DivRowMenue = styled.div`
display:flex;
flex-direction:row;
// justify-content: right;
height: 50px;
`;

export const CircleButton = styled(CircleDraw)`
background-color:#6BD6D2;
width:fit-content;
height:fit-content;
display:flex;
justify-content:center;
align-items: center;
margin:30px;
`

export const PlusCircle = styled(PlusOutline)`
color: #ffffff;
width : 40px;
height: 40px;
`




