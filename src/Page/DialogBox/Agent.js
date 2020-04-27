import React from 'react'
import styled from 'styled-components'
import { User } from '@styled-icons/boxicons-solid/User'
import { Microphone } from '@styled-icons/boxicons-solid/Microphone'
import { Edit } from '@styled-icons/boxicons-solid/Edit'

const Box = styled.div`
border: 2px solid #59D87F;
width: 300px;
height: fit-content;
margin :30px;
`

const RoleDialogDiv = styled.div`
display:flex;
flex-direction:row;
align-items: center;
justify-content: space-between;
padding: 5px;
`
const DialogRoleTitle = styled.p`
margin:0;
font-size: 18px;
`
const UserSelect = styled(User)`
    height: 25px;
    width: 25px;
    background-color:   #FD7582;
    border-radius: 50%;
    color: white;
    margin-left: 5px;
    padding: 5px;
    margin-bottom: auto;
`;

const EditBox = styled.div`
display:flex;
align-items: center;
justify-content: center;
padding:10px;
`
const TextBoxDiv = styled.div`
width: 100%;
    height: 100%;
    border:1px solid #454545;
    padding:5px;
`

const TextBox = styled.textarea`
width:100%;
padding:0;
border:none;
font-family : Montserrat;
font-size:15px;
    max-width: 100%;
    max-height: 100%;
`

const MicButton = styled(Microphone)`
color:  #7e7e7e;
height: 30px;
`
const EditButton = styled(Edit)`
color:  #7e7e7e;
height: 30px;
`

const ButtonDiv = styled.div`
display:flex;
flex-direction:row-reverse;
`

const AgentBox = () => {
    return (
        <Box>
            <RoleDialogDiv>
                <DialogRoleTitle>Name: User</DialogRoleTitle>
                <UserSelect />
            </RoleDialogDiv>
            <EditBox>
                <TextBoxDiv>
                    <ButtonDiv>
                        <MicButton />
                        <EditButton />
                    </ButtonDiv>
                    
                    <TextBox>
                        Hello ?
                    </TextBox>
                </TextBoxDiv>
            </EditBox>
        </Box>
    )
}

export default AgentBox