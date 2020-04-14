import React from 'react';
import styled from 'styled-components';
import ExampleIcons from '../Page/images/user-solid.svg'

const PopUpDiv = styled.div`
background-color:#9954E8;
border-radius: 10px;
width: fit-content;
position:absolute;
position: absolute;
z-index: 1;
margin: -70px 70px;


`

const GridPopUp = styled.div`
padding: 10px;
display:grid;
grid-template-columns:auto auto auto;
grid-gap:5px;

`;
const RolesImgages = styled.img`
filter:invert(1);
height:20px;
width:20px;
padding:5px;
`;

const PopUpTitle = styled.p`
font-family:'Montserrat';
color:#ffffff;
margin:0;
padding:5px;
font-weight: 700;
font-size:14px;
`

const RolesPopup = () => {
    return ( 
        <PopUpDiv>
            <PopUpTitle>Character</PopUpTitle>
             <GridPopUp>
                <RolesImgages src={ExampleIcons} />
                <RolesImgages src={ExampleIcons} />
                <RolesImgages src={ExampleIcons} />
                <RolesImgages src={ExampleIcons} />
                <RolesImgages src={ExampleIcons} />
                <RolesImgages src={ExampleIcons} />
            </GridPopUp> 
        </PopUpDiv>
           
            );
}
 
export default RolesPopup;