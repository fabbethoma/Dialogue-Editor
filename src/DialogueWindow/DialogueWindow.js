import React from 'react'
import {ContainerDiv, Input, Label, BreakDiv, TextArea, RoleSelection, Title, OptionSelect, LogoImg} from './styledDialogueWindow'
import SproutLogo from '../DialogueWindow/sprout_logo.png'

export default function DialogueWindow() {
    return (
        <>
        <LogoImg src={SproutLogo} alt="sprout-logo"/>

        <Title> Create your scenario: </Title>
        <ContainerDiv>

        

        <Label> Scenario Title: </Label>
        <Input id="Title" placeholder="Enter your title here..."></Input>
        <br></br>
        <BreakDiv> </BreakDiv>

        <Label> Description of Scenario: </Label>
        <TextArea id="Description" placeholder="Enter your description here..."></TextArea>

        <Label> Image </Label>

        <br></br>
        <BreakDiv> </BreakDiv>

        <Label> Select Role</Label>
        <RoleSelection>
        <OptionSelect value="0"> Player </OptionSelect>
        <OptionSelect value="1"> Virtual Character </OptionSelect>
        </RoleSelection>

        </ContainerDiv>
        </>
    )
}
