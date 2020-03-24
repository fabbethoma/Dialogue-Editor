import React from 'react';
import logo from '../logo.svg';
import Dialogue from '../DialogueWindow/DialogueWindow';
import './App.css';

const AppPage = () => {
    return (<div className="App">
        <header className="App-header">
            <Dialogue></Dialogue>
            <a
                className="App-link"
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
            >
                Learn React
        </a>
        </header>
    </div>  );
}
 
export default AppPage;