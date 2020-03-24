import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Dialogue from './DialogueWindow/DialogueWindow'
import AppPage from './Page/Landing'
import * as ROUTES from './routes'

function App() {
  return (
    <Router>
      <Route exact path={ROUTES.APP} component={AppPage} />
    </Router>
