import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import * as ROUTES from './routes'
import Landing from './page/Landing';
import AppPage from './page/AppPage';
import Example from './page/example';
import Roles from './page/roles'

const App = () => {
  return (
  <Router>
    <Route exact path={ROUTES.APP} component={AppPage} />
    <Route path={ROUTES.SCENARIO} component={Example} />
    <Route path={ROUTES.WORKSPACE} component={Example} />
    <Route path={ROUTES.ROLES} component={Roles} />
  </Router> 
  );
}
 
export default App;