import React, { Component } from 'react'
import styled from 'styled-components'
import { User } from '@styled-icons/boxicons-solid/User'
import { ChevronDownOutline } from '@styled-icons/evaicons-outline/ChevronDownOutline'


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


const InputAndButton = styled.div`
display:flex;
flex-direction:row;
    align-items: center;
    justify-content:space-between;
        margin-right: 40px;
`;



const CharacterInput = styled.div`
display:flex;
flex-direction:row;
align-items: center;
justify-content:space-between;
width:100%;
border-bottom:1px solid black;
`
const CharacterSelect = styled.div`
margin: 0;
width:160px;
height:fit-content;
background-color:#ffffff;
display:flex;
flex-direction:column;
align-items: center;
margin: 5px 0;
border-radius: 5px;
padding-bottom: 10px;
`
const Okbutton = styled.span`
border-radius:5px;
margin-left:5px;
background-color:#59D87F;
color:#454545;
    width: fit-content;
    align-self: flex-end;
    padding:5px;
    filter: brightness(1.3);
    font-weight: 700;
`;

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

class CharacterWorkspace extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             
        }
    }

    render(){
        return (
            <UserDiv>
                <CloseButton onClick={this.props.isOpen} />
                <InputAndButton>
                    <CharacterSelect >
                        <CharacterInput>
                            <SelectText>Name:</SelectText>
                            <ArrowSelectDown />
                        </CharacterInput>
                        <CharacterInput>
                            <SelectText>Title:</SelectText>
                            <ArrowSelectDown />
                        </CharacterInput>
                        <CharacterInput>
                            <SelectText>Action:</SelectText>
                            <ArrowSelectDown />
                        </CharacterInput>
                        <CharacterInput>
                            <SelectText>Mood:</SelectText>
                            <ArrowSelectDown />
                        </CharacterInput>
                    </CharacterSelect>
                    <UserSelect />
                </InputAndButton>
                <Okbutton>Ok</Okbutton>
                </UserDiv>
        )
    }
    
}

export default CharacterWorkspace