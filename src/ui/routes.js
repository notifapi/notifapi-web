// src/routes.js
import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './pages/App';
import Home from './pages/Home';
import ConfirmEmail from './pages/ConfirmEmail';

export default (
    <Route path="/" component={App}>
        <IndexRoute component={Home} />
        <Route path="confirm" component={ConfirmEmail} />
    </Route>
);