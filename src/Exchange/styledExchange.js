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
height: 30px;
font-family: 'Montserrat', sans-serif;
outline: none;
border: none;
border-bottom: 1px solid #765CF6;
font-size: 16px;
line-height: 22px;
margin-top: 20px;

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
font-size: 16px;
line-height: 22px;
margin-top: 20px;

:focus {
    transition: 0.5s ease;
    border-bottom: 2px solid #765CF6;
}

::placeholder,::-webkit-input-placeholder {
    color: #7e7e7e;
  }
`;


export const Submit = styled.input`

border-radius: 30px;
margin-top: 10px;
background-color: #59D87F;
width: 20%;
border: none;
font-family: 'Montserrat', sans-serif;
color: white;
justify-content: flex-end;

`

export const CancelButton = styled.input`
background-color: #FD7582;
border-radius: 30px;
margin-top: 10px;
width: 20%;
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
