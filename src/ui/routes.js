// src/routes.js
import React from 'react';
import { Router, Route, IndexRoute } from 'react-router';

import App from './components/App';
import Home from './components/Home';
import Login from './components/Login'
import NotFound from './components/NotFound';

const Routes = (props) => (
    <Router {...props}>
        <Route path="/" component={App} >
            <IndexRoute component = {Home} />
            <Route path="login" component={Login} />
        </Route>
        <Route path="*" component={NotFound} />
    </Router>
);

export default Routes;