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
`;

// export const DivForm = styled.div`

// `

export const Label = styled.label``

export const TextInput = styled.input`
height: 30px;


`;

export const Submit = styled.input`

`