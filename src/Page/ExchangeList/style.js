import styled from "styled-components";

export const exchangeDiv = styled.div`
  font-family: "Montserrat", sans-serif;

  display: flex;
  flex-direction: column;
  margin: 0;
  margin-top: 10px;

  width: 40%;

  :nth-child(even) {
    float: right;
    margin: 10px;
    border-color: white;
    background-color: #f2f2f2;
    border-right: 20px solid;
    border-right-color: #59d8b9;
    border-radius: 20px;
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
    justify-content: float-right;
    float: left;
    flex-direction: column;
    border-radius: 20px;
    border-left: 20px solid;
    border-color: white;
    margin: 10px;
    background-color: #f2f2f2;
    border-left-color: #f9ae69;

    -webkit-box-shadow: 10px 10px 5px 0px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: 10px 10px 5px 0px rgba(0, 0, 0, 0.75);
    box-shadow: 10px 10px 5px 0px rgba(0, 0, 0, 0.75);
  }
  button {
    margin-left: 40px;
    margin-bottom: 5px;
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

// export const editButton = styled.button`

//     border-radius: 20px;
//     background-color: #FFD03A;
//     width: 10%;
//     margin-left: 5px;
//     border: none;
//     font-family: 'Montserrat', sans-serif;
//     font-weight: bold;
//     margin-right: 100px;

// `;

export const DuplicateButton = styled.button`
  width: 15%;
  background: none;
  border: 4px solid;
  color: #6bd6d2;
  font-weight: 700;
  font-family: "Montserrat", sans-serif;
  text-transform: uppercase;
  cursor: pointer;
  font-size: 13px;
  position: relative;
  &:before {
    content: "";
    position: absolute;
    width: 14px;
    height: 4px;
    background: #353b48;
    transform: skewX(50deg);
    transition: 0.4s linear;
  }
  &:after {
    content: "";
    position: absolute;
    width: 14px;
    height: 4px;
    background: #353b48;
    transform: skewX(50deg);
    transition: 0.4s linear;
  }
  &:before {
    top: -4px;
    left: 10%;
  }
  &:after {
    bottom: -4px;
    right: 10%;
  }
  &:hover:before {
    left: 80%;
  }
  &:hover:after {
    right: 80%;
  }
  &:hover {
    background: #6bd6d2;
    color: white;
  }
`;

export const editButton = styled.button`
  width: 10%;
  background: none;
  border: 4px solid;
  color: #6bd6d2;
  font-weight: 700;
  text-transform: uppercase;
  font-family: "Montserrat", sans-serif;
  cursor: pointer;
  font-size: 13px;
  position: relative;
  &:before {
    content: "";
    position: absolute;
    width: 12px;
    height: 4px;
    background: #353b48;
    transform: skewX(50deg);
    transition: 0.4s linear;
  }
  &:after {
    content: "";
    position: absolute;
    width: 14px;
    height: 4px;
    background: #353b48;
    transform: skewX(50deg);
    transition: 0.4s linear;
  }
  &:before {
    top: -4px;
    left: 10%;
  }
  &:after {
    bottom: -4px;
    right: 10%;
  }
  &:hover:before {
    left: 80%;
  }
  &:hover:after {
    right: 80%;
  }
  &:hover {
    background: #6bd6d2;
    color: white;
  }
`;

export const OrderButton = styled.button`
  width: 10%;
  background: none;
  border: 4px solid;
  color: #6bd6d2;
  font-weight: 700;
  text-transform: uppercase;
  cursor: pointer;
  font-size: 13px;
  font-family: "Montserrat", sans-serif;
  position: relative;
  &:before {
    content: "";
    position: absolute;
    width: 14px;
    height: 4px;
    background: #353b48;
    transform: skewX(50deg);
    transition: 0.4s linear;
  }
  &:after {
    content: "";
    position: absolute;
    width: 14px;
    height: 4px;
    background: #353b48;
    transform: skewX(50deg);
    transition: 0.4s linear;
  }
  &:before {
    top: -4px;
    left: 10%;
  }
  &:after {
    bottom: -4px;
    right: 10%;
  }
  &:hover:before {
    left: 80%;
  }
  &:hover:after {
    right: 80%;
  }
  &:hover {
    background: #6bd6d2;
    color: white;
  }
`;

export const h1 = styled.h1``;

export const p = styled.p`
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
  height: 30px;
`;

export const SpanExchange = styled.span`
  margin: 21.3px 0;
`;
