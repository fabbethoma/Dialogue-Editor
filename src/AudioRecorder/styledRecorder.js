import styled from 'styled-components'

export const Container = styled.div`
display:flex;
justify-content: center;
flex-direction: row;
border: 1px solid #dedfed;
box-shadow: inset 0 0 0 2px #dedfed;
`;
// #FF4444;
export const RecButton = styled.button`
width: 10%;
height: 30px;
margin-top: 12px;
  background: none;
  border: 4px solid;
  color: #FF4444;
  font-weight: 700;
  text-transform: uppercase;
  cursor: pointer;
  font-size: 13px;
  font-family: 'Montserrat', sans-serif;
  position: relative;
  &:before {  
    content: "";
    position: absolute;
    width: 14px;
    height: 4px;
    background: #353b48;
    transform: skewX(50deg);
    transition: .4s linear;
  }
  &:after {  
    content: "";
    position: absolute;
    width: 14px;
    height: 4px;
    background: #353b48;
    transform: skewX(50deg);
    transition: .4s linear;
  }
  &:before {  
    top: -4px;
    left: 10%;
  }
  &:after{  
    bottom: -4px;
    right: 10%;
  }
  &:hover:before {  
    left: 80%;
  }
  &:hover:after{  
    right: 80%;

  }
  &:hover{  
    background: #FF4444;
    color: white;
  }

`;

export const StopButton = styled.button`

border: none;
border-radius: 20px;
margin-left: 20px;
margin-right: 20px;
font-size: 45px;
background: none;
margin-bottom: 12px;

`;

export const SaveButton = styled.button`

width: 10%;
height: 30px;
margin-top: 12px;
  background: none;
  border: 4px solid;
  color: #59D87F;
  font-weight: 700;
  text-transform: uppercase;
  cursor: pointer;
  font-size: 13px;
  font-family: 'Montserrat', sans-serif;
  position: relative;
  &:before {  
    content: "";
    position: absolute;
    width: 14px;
    height: 4px;
    background: #353b48;
    transform: skewX(50deg);
    transition: .4s linear;
  }
  &:after {  
    content: "";
    position: absolute;
    width: 14px;
    height: 4px;
    background: #353b48;
    transform: skewX(50deg);
    transition: .4s linear;
  }
  &:before {  
    top: -4px;
    left: 10%;
  }
  &:after{  
    bottom: -4px;
    right: 10%;
  }
  &:hover:before {  
    left: 80%;
  }
  &:hover:after{  
    right: 80%;

  }
  &:hover{  
    background: #59D87F;
    color: white;
  }

`