import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { AddressCard } from '@styled-icons/fa-regular/AddressCard'
import { UserTie } from '@styled-icons/fa-solid/UserTie'
import { User } from '@styled-icons/fa-solid/User'

export const ContainerDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: 'Montserrat', sans-serif;
  color : #765CF6;
  display: grid;
  grid-template-column: 1fr 1fr 1fr;
  grid-template-row: 20% 20% 60%;
`;

export const EmptyContainer = styled.div`
// border: 1px solid black;
width: 100px;
height: 50px;
grid-column: 2;
grid-row: 1/3;

`;

export const Input = styled.input`

	background: none;
	border: none;
  font-weight:700;
  color:#454545;
  font-size:16px;
  height: 30px;

  width: 91%;
  /* color: white; */
  font-family: 'Montserrat', sans-serif;
  &[type='file'] {
    display:none;
  }
  :focus{
    outline: none;
  }
  ::placeholder,::-webkit-input-placeholder {
  color: #7e7e7e;
}

:-ms-input-placeholder {
color: #7e7e7e;
}



`;

export const RolesInput = styled(Input)`
 width: 45%;
 `

export const TextArea = styled.textarea`
	padding:10px 0;
	background: none;
  border: 3px solid #ffd03a87;
  border-top: none;
  border-left:none;
  border-right:none;
  width: 100%;
  font-weight:700;
  font-size:16px;
  color:#454545;
  height:32px;
  /* color: white; */
  font-family: 'Montserrat', sans-serif;
  :focus{
    outline: none;
  }
    ::placeholder,::-webkit-input-placeholder {
  color: #7e7e7e;
}

:-ms-input-placeholder {
color: #7e7e7e;
}
`;

export const Label = styled.label`
  align-self: flex-start;
  display: block;
  padding: 0;
  color:#454545;
  align-self: center;
  font-weight: 700;
`;



export const BreakDiv = styled.div`

  margin: auto;
  background-color: #FD7582;
  height: 3px;
  width: 50%;
  margin-top: 10px;
  margin-bottom: 10px;

`;

export const RoleSelection = styled.select`

  padding: 10px 15px;
  outline:none;
  border: none;
  font-size: 16px;
  align-self:flex-start;

`;

export const OptionSelect = styled.option`

  padding-top: 10px;
  padding-bottom: 10px;

`;

export const Title = styled.h1`

  font-size: 40px;
  color:rgba(253, 117, 130, 0.54);
  align-self:flex-start;
  margin-top: 0px;
  padding-top: 15px;
  margin-bottom:0;
  padding-left: 50px;
  padding-right: 50px;
  display: flex;
  align-self: center;
  font-family: 'Montserrat', sans-serif;
  color : #765CF6;
`;

export const SecondTitle = styled.h2`
  font-size:30px;
  color: #404040;
  align-self: flex-start;
  font-weight: bold;
  grid-row: 1;
  grid-column: 1;
`;

export const ScenarioTitle = styled.h3`
  font-size:20px;
  color: #404040;
  display: flex;
  flex-direction: column;
  // justify-content: flex-start;
  align-self: flex-start;
  font-weight: bold;
  
  cursor: pointer;
  padding-bottom: 5px;
  grid-column: 3;
  grid-row: 3;

  p {
    padding-bottom: 5px;
    border-bottom: 2px ridge #B3B3B3;

  }

`;

export const LogoImg = styled.img`
  width: auto;
  height: 160px;
  margin-top: 10px;
  // background: #FFA248;

`;

export const RolesStyledLink = styled(Link)`
  margin:0;
  text-decoration:none;
  color:#ffffff;
  background-color:#3DCEBD;
  cursor:pointer;
  font-weight:700;
  border-radius:5px;
  padding:8px;
  display: flex;
  flex-direction: row;
  align-items: center;
  &> *{
    margin: 0;
  }
    :active {
    background-color:#FFD03A;
}
`;


export const UploadLabel = styled(Label)`
color:#ffffff;
background-color:#3DCEBD;
cursor:pointer;
font-weight:700;
padding: 8px;
border-radius:5px;
:active {
  background-color:#FFD03A;
}
`;

export const DivInput = styled.div`
  display:flex;
  width:100%;
  flex-direction:row;
  justify-content: space-between;
  padding:10px 0;
  border-bottom:3px solid ${props => props.theme.main};
  align-items: center;
`;
export const DivAgentInput = styled(DivInput)`
  justify-content : start;
`

export const RolesIcon = styled(User)`
  width:21px;
  color: #454545;
  padding-right:10px;


`

export const RolesIconAgent = styled(UserTie)`
  width:21px;
  color: #454545;

`

export const UserIDCard = styled(AddressCard)`
  width:21px;
  color: #ffffff;
  padding-right:10px;
`
export const InputText = styled.p`
  margin: 0; 
  color:#454545;
  align-self:flex-start;
`

export const DivLabelInput = styled.div`
padding:15px 0;
`;

export const NextLink = styled(Link)`
  text-decoration:none;
  color:#ffffff;
  font-family:'Montserrat', sans-serif;
  border: none;
  background-color:#3DCEBD;
  cursor:pointer;
  font-weight:700;
  font-size: 15px;
  border-radius:20px;
  padding:8px 40px;
  width:fit-content;
  align-self: center;
  margin:20px;
`

export const FormStyle = styled.form`
  display :flex;
  flex-direction: column;
  width: 100%;
  align:flex-start;
  grid-column: 1;
  grid-row: 3;
`

// export const ScenarioContainer = styled.div`
//   display: flex;
//   flex-direction: row;
//   grid-column: 3;
//   grid-row: 3;

// `;

export const ScenarioContainerTitle = styled.h3`

  grid-row: 1;
  grid-column: 3;
  padding-bottom: 5px;
  border-bottom: 3px dotted #D9D9D9;
  display: flex;
  justify-content: center;

`;
