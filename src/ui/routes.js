// src/routes.js
import React from 'react';
import { Router, Route, IndexRoute } from 'react-router';

import App from './layouts/App';
import NotFound from './components/NotFound';
import Home from './views/App/Home';

const Routes = (props) => (
    <Router {...props}>
        <Route path="/" component={App} >
            <IndexRoute component = {Home} />
        </Route>
        <Route path="*" component={NotFound} />
    </Router>
);

export default Routes;