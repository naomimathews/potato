import React from 'react';
import { browserHistory, Router, Route } from 'react-router';
import Home from './Home';

const routes = (
  <Router history={browserHistory} >
    <Route path='/' component={Home} />
  </Router>
)

export default routes;
