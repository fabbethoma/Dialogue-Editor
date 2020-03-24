import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import AppPage from './Page/AppPage'
import * as ROUTES from './routes'

const App = () => {
  return (
  <Router>
    <Route exact path={ROUTES.APP} component={AppPage} />
  </Router> 
  );
}
 
export default App;