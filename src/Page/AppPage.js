import React from 'react';
import Dialogue from '../DialogueWindow/DialogueWindow';
import styled from 'styled-components'
import '../App.css';

const Fullpage = styled.div`
display:flex;
flex-direction:column;
align-items:center;
`
const AppPage = () => {
    
    return (
        <Fullpage>
            <Dialogue></Dialogue>
        </Fullpage>
        );
}

export default AppPage;