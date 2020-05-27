import styled from 'styled-components'

export const DivExchange = styled.div`

font-family: 'Montserrat', sans-serif;
margin-left: 30px;
margin-top: 5em;




border-left: :nth-child(even) {
    color: green: //Byt till företagsfärg
    

    border-left: 5px;
}

border-left: :nth-child(odd) {
    color: red; //Byt till företagsfärg
    

    border-left: 5px;
}

`;

export const FormExchange = styled.form`
width: 30%;
display: flex;
flex-direction: column;
justify-content: center;
font-family: 'Montserrat', sans-serif;
background: #f1f1f1;
padding: 40px;
border-radius: 8px;
padding: 0.5rem 1rem;
border-radius: 40px;
margin: 0 0.5rem 0 0;
margin-bottom: 5px;
background-color: #fff;
box-shadow: inset 0 0 0 2px #dedfed;
font-size: 14px;
font-weight: bold;
box-sizing: border-box;

`;

// export const DivForm = styled.div`

// `

export const Label = styled.label`
font-weight: bold;
font-size: 12px;
line-height: 22px;
margin-top: 20px;

`

export const TextInput = styled.input`
float: left;
height: 40px;
border: none;
padding: 0.5rem 1rem;
border-radius: 40px;
margin: 0 0.5rem 0 0;
margin-bottom: 5px;
width: calc(100% - 52px);
background-color: #dedfed;
box-shadow: inset 0 0 0 2px #dedfed;
font-size: 14px;
font-weight: bold;

box-sizing: border-box;

`;

export const TextArea = styled.textarea`
float: left;
height: 40px;
border: none;
padding: 0.5rem 1rem;
border-radius: 40px;
margin: 0 0.5rem 0 0;
margin-bottom: 5px;
width: calc(100% - 52px);
background-color: #dedfed;
box-shadow: inset 0 0 0 2px #dedfed;
font-size: 14px;
font-weight: bold;

box-sizing: border-box;

`;


export const Submit = styled.button`

width: 15%;
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
// #FD7582 #59D87F
export const CancelButton = styled.button`
width: 15%;
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

export const SelectMenu = styled.select`

border-radius: 10px 10px 0px 0px;
display: flex;
text-align-last: center;
background-color: #ffffff;
outline: none;
font-family: 'Montserrat', sans-serif;
height: 30px;
width: 30%;

`;

export const Option = styled.option`

border-radius: 20px;
font-family: 'Montserrat', sans-serif;

:hover {
    background: #D9D9D9;
}

`;
