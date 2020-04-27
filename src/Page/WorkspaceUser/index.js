import React, { Component } from 'react'
import styled from 'styled-components'
import { ChevronDownOutline } from '@styled-icons/evaicons-outline/ChevronDownOutline'
import { ChevronRightOutline } from '@styled-icons/evaicons-outline/ChevronRightOutline'
import { PlusOutline } from '@styled-icons/evaicons-outline/PlusOutline'
import { User } from '@styled-icons/boxicons-solid/User'

const UserDiv = styled.div`
background-color: #6BD6D2;
width:fit-content;
color:white;
padding:15px;
margin: 30px;
display:flex;
flex-direction:column;
border-radius: 30px;
`;

const CloseButton = styled.div`
background-color: #FFA248;
width:30px;
height:10px;
margin-left:0;
border-radius: 5px;
align-self: flex-end;
`

const SelectInput = styled.div`
margin: 0;
width:120px;
height:fit-content;
background-color:#ffffff;
display:flex;
flex-direction:column;
align-items: center;
margin: 5px 0;
border-radius: 5px;
`;

const ArrowSelectDown = styled(ChevronDownOutline)`
color: #454545;
height:25px;
width:25px;
`;

const SelectText = styled.p`
color: #454545;
font-size: 14px;
margin: 3px 0;
padding-left: 5px;
`;

const DialogTitle = styled.p`
font-size: 12px;
color: #454545;
margin:0;
`;

const InputAndButton = styled.div`
display:flex;
flex-direction:row;
    align-items: center;
    justify-content:space-between;
        margin-right: 60px;
`;

const ArrowSelectRight = styled(ChevronRightOutline)`
color: #454545;
height:25px;
width:25px;
`;

const ArrowSelectBackground = styled.span`
background-color:lightblue;
border-radius:5px;
margin-left:5px;
`;

const PlusCircleBackground = styled.span`
border-radius: 50%;
width: fit-content;
background-color:#FFD03A;
display: flex;
justify-content:center;
padding:1px;
align-items:center;
`

const PlusCirle = styled(PlusOutline)`
width:20px;
height:20px;
color:#454545;
`;


const CostumSelect = styled.div`
display:flex;
flex-direction:row;
align-items: center;
justify-content:space-between;
width:100%;
`

const OptionShow = styled.div`
display : ${props => props.showList ? 'block': 'none'};
margin:0;
padding:0;
width: 100%;
`

const OptionItem = styled.li`
border-top:1px solid #454545;
list-style-type:none;
color:#454545;
width:100%;
padding: 5px 0;

`

const OptionItemText = styled.p`
font-size : 14px;
padding-left:5px;
margin : 0;
`;

const UserItem = styled(User)`
color: black;
height:20px;
width:20px;
padding:5px 7px;
`;

const UserGrid = styled.div`
 display: flex;
  flex-wrap: wrap;
  justify-content: center;
`

class WorkspaceUser extends Component {
    constructor(props) {
        super(props)

        this.state = {
            showRoles: false,
            showCharacter: false
        }
    }
    RolesListDisplay = () => {
        const changeState = !this.state.showRoles
        this.setState({showRoles: changeState})
    }
    CharacterListDisplay = () => {
        const changeState = !this.state.showCharacter
        this.setState({  showCharacter: changeState })
    }
    

    render() {
        
        return (
            <UserDiv>
                <CloseButton onClick={this.props.isOpen} />
         
                    <InputAndButton>
                        <SelectInput>
                            <CostumSelect onClick={this.CharacterListDisplay}>
                                <SelectText>Character</SelectText>
                                <ArrowSelectDown />
                            </CostumSelect >
                            <OptionShow showList={this.state.showCharacter ? 'block' : null} >
                                <OptionItem as='div'>
                                    <UserGrid>
                                        <UserItem />
                                        <UserItem />
                                        <UserItem />
                                        <UserItem />
                                        <UserItem />
                                        <UserItem />
                                        <ArrowSelectDown />
                                    </UserGrid>

                                </OptionItem>
                            </OptionShow>
                        </SelectInput>
                    </InputAndButton>
                    <SelectInput>
                        <CostumSelect onClick={this.RolesListDisplay}>
                            <SelectText>User</SelectText>
                            <ArrowSelectDown />
                        </CostumSelect>
                        <OptionShow as='ul' showList={this.state.showRoles ? 'block' : null}>
                            <OptionItem>
                                <OptionItemText>
                                    Agent
                            </OptionItemText>
                            </OptionItem>
                            <OptionItem>
                                <OptionItemText>
                                    User
                            </OptionItemText>
                            </OptionItem>
                        </OptionShow>
                    </SelectInput>
                    <DialogTitle>Text</DialogTitle>
                    <InputAndButton>
                        <SelectInput>
                            <CostumSelect>
                                <SelectText>Dialog text</SelectText>
                            </CostumSelect>
                        </SelectInput>
                        <ArrowSelectBackground>
                            <ArrowSelectRight />
                        </ArrowSelectBackground>
                    </InputAndButton>
                    <PlusCircleBackground>
                        <PlusCirle />
                    </PlusCircleBackground>
            
            </UserDiv>
        )
    }
}


export default WorkspaceUser

