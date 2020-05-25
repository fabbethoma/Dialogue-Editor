import styled from "styled-components";

export const exchangeDiv = styled.div`
  font-family: "Montserrat", sans-serif;

  display: flex;
  flex-direction: column;
  margin: 0;
  margin-top: 10px;

  width: 40%;

  :nth-child(even) {
    border: 2px solid #765cf6;
    float: right;
    margin: 10px;
    margin-top: 20px;
    border-right: 6px solid #765cf6;
    border-top: 10px solid #765cf6;
    border-radius: 100px 100px 100px 100px;
    -moz-border-radius: 100px 100px 100px 100px;
    -webkit-border-radius: 100px 20px 20px 20px;
    -webkit-box-shadow: 10px 10px 5px 0px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: 10px 10px 5px 0px rgba(0, 0, 0, 0.75);
    box-shadow: 10px 10px 5px 0px rgba(0, 0, 0, 0.75);

    p {
      padding-left: 10px;
    }
    h4 {
      padding-left: 10px;
    }

    button {
      margin-left: 40px;
      margin-bottom: 5px;
    }
  }

  :nth-child(odd) {
    border: 2px solid #ff6858;
    justify-content: float-right;
    float: left;
    flex-direction: column;
    margin-left: 10px;
    padding-bottom: 5px;
    padding-left: 5px;
    border-left: 6px solid #ff6858;
    border-top: 10px solid #ff6858;
    border-radius: 100px 100px 100px 100px;
    -moz-border-radius: 100px 100px 100px 100px;
    -webkit-border-radius: 20px 20px 100px 20px;
    -webkit-box-shadow: 10px 10px 5px 0px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: 10px 10px 5px 0px rgba(0, 0, 0, 0.75);
    box-shadow: 10px 10px 5px 0px rgba(0, 0, 0, 0.75);
  }
`;

export const deleteButton = styled.button`
  border-radius: 20px;
  background-color: #ff6858;
  border: none;
  width: 5%;
  font-family: "Montserrat", sans-serif;
  font-weight: bold;
  color: white;
  float: right;
  margin-right: 10px;
`;

export const DuplicateButton = styled.button`
  border-radius: 20px;
  background-color: #59d87f;
  width: 15%;
  margin-left: 5px;
  border: none;
  font-family: "Montserrat", sans-serif;
  font-weight: bold;
  margin-right: 100px;
`;

export const editButton = styled.button`
  border-radius: 20px;
  background-color: #ffd03a;
  width: 10%;
  margin-left: 5px;
  border: none;
  font-family: "Montserrat", sans-serif;
  font-weight: bold;
  margin-right: 100px;
`;

export const p = styled.p`
  border-bottom: 2px dotted #d9d9d9;
`;

export const TextArea = styled.textarea`
  height: 30px;
`;

export const SpanExchange = styled.span`
  margin: 21.3px 0;
`;
