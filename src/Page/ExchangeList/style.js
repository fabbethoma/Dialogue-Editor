import styled from 'styled-components'

export const exchangeDiv = styled.div`

font-family: 'Montserrat', sans-serif;

display: flex;
flex-direction: column;
margin: 0;
margin-top: 10px;

width: 40%;
flex-wrap: space-around;

:nth-child(even) {
    border: 2px solid #765CF6;
    float: right;
    margin: 10px;
    margin-top: 20px;
    border-right: 10px solid #765CF6;
    // padding-bottom: 5px;
    // padding-left: 5px;
    // border-radius: 20px;
    border-radius: 40px 0px 20px 20px;

    p {
      padding-left: 10px;
    }
    h4{
      padding-left: 10px;
    }

    button {
      margin-left: 10px;
      margin-bottom: 5px;
    }
}

:nth-child(odd) {
    border: 2px solid #F9AE69;
    justify-content: float-right;
    float: left;
    flex-direction: column;
    margin-left: 10px;
    padding-bottom: 5px;
    padding-left: 5px;
    border-left: 10px solid #F9AE69;
    border-radius: 0px 20px 20px 20px;
}

`;

export const deleteButton = styled.button`

    border-radius: 20px;
    background-color: #FF6858;
    border: none;
    width: 20%;
    font-family: 'Montserrat', sans-serif;
    font-weight: bold;
    color: white;

`;

export const editButton = styled.button`

    border-radius: 20px;
    background-color: #FFD03A;
    width: 10%;
    margin-left: 15px;
    border: none;
    font-family: 'Montserrat', sans-serif;
    font-weight: bold;
`;

export const p = styled.p`
  border-bottom: 2px dotted #D9D9D9;

`;