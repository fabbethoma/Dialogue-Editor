import React from 'react';
import {Link} from 'react-router-dom'
import Dialogue from '../DialogueWindow/DialogueWindow';
import * as ROUTES from '../routes'
import '../App.css';

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
        <Link to={ROUTES.ROLES}>ROLES</Link>
    </div>);
}

export default AppPage;