import styled from 'styled-components'

export const DivExchange = styled.div`

font-family: 'Montserrat', sans-serif;
margin-left: 30px;


border-left: :nth-child(even) {
    color: red; //Byt till företagsfärg
    border-left: 5px;
}

border-left: :nth-child(odd) {
    color: blue; //Byt till företagsfärg

    border-left: 5px;
}

`;

export const FormExchange = styled.form`
width: 40%;
display: flex;
flex-direction: column;
font-family: 'Montserrat', sans-serif;

`;

// export const DivForm = styled.div`

// `

export const Label = styled.label`
font-weight: bold;
margin-top: 10px;

`

export const TextInput = styled.input`
height: 30px;
font-family: 'Montserrat', sans-serif;
outline: none;
border: none;
border-bottom: 1px solid #765CF6;
font-weight:500;
font-size:16px;

:focus {
    transition: 0.5s ease;
    border-bottom: 2px solid #765CF6;
}

::placeholder,::-webkit-input-placeholder {
    color: #7e7e7e;
  }

`;

export const TextArea = styled.textarea`
height: 30px;
font-family: 'Montserrat', sans-serif;
outline: none;
font-weight:500;
font-size:16px;

:focus {
    transition: 0.5s ease;
    border-bottom: 2px solid #765CF6;
}

::placeholder,::-webkit-input-placeholder {
    color: #7e7e7e;
  }
`;


export const Submit = styled.input`

border-radius: 20px;
margin-top: 10px;
background-color: #765CF6;
width: 10%;
border: none;
font-family: 'Montserrat', sans-serif;
color: white;
justify-content: flex-end;

`

export const CancelButton = styled.input`
background-color: #FF6858;
border-radius: 20px;
margin-top: 10px;
width: 10%;
border: none;
font-family: 'Montserrat', sans-serif;
color: white;

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
