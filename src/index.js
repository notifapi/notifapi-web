import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';

import store from './ui/store';

import Routes from './ui/routes';

import './ui/main.css';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';

/** tracer alert and js erros **/
// import Raven from 'raven-js';
//
// // Tracer the error code and warning on production
// Raven.config(process.env.REACT_APP_RAVEN_URL, {
//     environment: process.env.REACT_APP_ENVIRONMENT
// }).install();

const ownStore = store();
ReactDOM.render(
    <Provider store={ownStore}>
        <Router history={browserHistory} routes={Routes} />
    </Provider>,
  document.getElementById('root')
);
