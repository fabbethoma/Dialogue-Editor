import React from 'react'
import styled from 'styled-components'

export const ContainerDiv = styled.div`

  font-family: 'Montserrat', sans-serif;
  color : #765CF6;
`;

export const Input = styled.input`
	padding: 0.5em;
	background: none;
	border: none;
  margin-bottom: 0.5em;
  height: 30px;
  border-bottom: 1px solid #3DCEBD;
  color: white;
  font-family: 'Montserrat', sans-serif;

  :focus{
    border-bottom: 3px solid #3DCEBD;
    transition: 0.2s ease;
    outline: none;
  }

  ::placeholder,
  ::-webkit-input-placeholder {
    color: #c3c3c3;
  }
  :-ms-input-placeholder {
     color: #c3c3c3;
  }
`;

export const TextArea = styled.textarea`
	padding: 0.5em;
	background: none;
	border: 1px solid #3DCEBD;
	border-radius: 3px;
  margin-bottom: 0.5em;
  width: 283px;
  height: 153px;
  color: white;
  font-family: 'Montserrat', sans-serif;

  :focus{
    outline: none;
  }

  ::placeholder,
  ::-webkit-input-placeholder {
    color: #c3c3c3;
  }
  :-ms-input-placeholder {
     color: #c3c3c3;
  }
`;

export const Label = styled.label`

  display: block;

`;

export const BreakDiv = styled.div`

  margin: auto;
  background-color: #FD7582;
  height: 3px;
  width: 50%;
  margin-top: 10px;
  margin-bottom: 10px;

`;

export const RoleSelection = styled.select`

  padding: 10px 15px;
  outline:none;
  border: none;
  font-size: 16px;

`;

export const OptionSelect = styled.option`

  padding-top: 10px;
  padding-bottom: 10px;

`;

export const Title = styled.p`

font-size: 50px;
color: #765CF6;

margin-top: 0px;
padding-top: 15px;

`;

export const LogoImg = styled.img`
width: 330px;
height: 160px;

// background: #FFA248;

`;
