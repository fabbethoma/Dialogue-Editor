import React from 'react'
import styled from 'styled-components'
import { User } from '@styled-icons/boxicons-solid/User'
import { Play } from '@styled-icons/boxicons-regular/Play'
import { CloseOutline } from '@styled-icons/evaicons-outline/CloseOutline'
import { FlowBranch } from '@styled-icons/entypo/FlowBranch'
import { Microphone } from '@styled-icons/boxicons-solid/Microphone'

const Box = styled.div`
border: 2px solid  #FD7582;
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

const OptionsAndAnswer = styled.div`
display:flex;
flex-direction:column;
padding-top: 20px;
& > * {
 width:100%; 
}
`
const Option = styled.div`
background-color:#efc0fb;
display:flex;
flex-direction:row;
align-items: center;
justify-content: space-between;
height:30px;
`

const Text = styled.p`
margin : 0;
height:20px;
padding:5px 0;
`

const OptionText = styled.p`
margin : 0;
`;

const RowOfIcons = styled.div`
display:flex;
flex-direction:row;
align-items: center;
justify-content: space-between;
`

const XButton = styled(CloseOutline)`
color:  #7e7e7e;
height: 30px;
`
const FlowDialog = styled(FlowBranch)`
color:  #7e7e7e;
height: 30px;
`


const PlayButton = styled(Play)`
color:  #7e7e7e;
height: 30px;
`

const MicButton = styled(Microphone)`
color:  #7e7e7e;
height: 30px;
`
const UserBox = () => {
    return (
        <Box>
            <RoleDialogDiv>
                <DialogRoleTitle>Name: User</DialogRoleTitle>
                <UserSelect />
            </RoleDialogDiv>
            <OptionsAndAnswer>
                <Option>
                    <OptionText>
                        Option #1
                    </OptionText>
                    <RowOfIcons>
                        <PlayButton />
                        <MicButton />
                        <XButton />
                        <FlowDialog />
                    </RowOfIcons>
                </Option>
                <Text>Hello there</Text>
                <Option>
                    <OptionText>
                        Option #2
                    </OptionText>
                    <RowOfIcons>
                        <PlayButton />
                        <MicButton />
                        <XButton />
                        <FlowDialog />
                    </RowOfIcons>
                </Option>
                <Text>Hello there</Text>

            </OptionsAndAnswer>
        </Box>
    )
}

export default UserBox