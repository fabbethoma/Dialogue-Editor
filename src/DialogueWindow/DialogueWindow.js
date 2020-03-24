import React from 'react'
import {ContainerDiv, Input, Label, BreakDiv, TextArea, RoleSelection} from './styledDialogueWindow'

export default function DialogueWindow() {
    return (
        <>
        <ContainerDiv>

        <Label> Title Text </Label>
        <Input id="Title"></Input>
        <br></br>
        <BreakDiv> </BreakDiv>

        <Label> Description </Label>
        <TextArea id="Description"></TextArea>

        <Label> Image </Label>
        <Box height="small" width="small">
  <Image
    fit="cover"
    src=""
  />
</Box>

        <br></br>
        <BreakDiv> </BreakDiv>

        <RoleSelection>
        <option value="0"> Player </option>
        <option value="1"> Virtual Character </option>
        </RoleSelection>
        </ContainerDiv>
        </>
    )
}
