import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import * as ROUTES from './routes'
import Landing from './Page/Landing.js'
import AppPage from './Page/AppPage';
import Example from './Page/example';
import Roles from './Page/roles'

const App = () => {
  return (
  <Router>
    <Route exact path={ROUTES.LANDING} component={Landing} />
    <Route path={ROUTES.APP} component={AppPage} />
    <Route path={ROUTES.SCENARIO} component={Example} />
    <Route path={ROUTES.WORKSPACE} component={Example} />
    <Route path={ROUTES.ROLES} component={Roles} />
  </Router> 
  );
}
 
export default App;