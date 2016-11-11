import React from 'react';
import ReactDOM from 'react-dom';

/** tracer alert and js erros **/
import Raven from 'raven-js';

import { browserHistory } from 'react-router';

import Routes from './ui/routes';

import './ui/main.css';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';

// Tracer the error code and warning on production
Raven.config(process.env.REACT_APP_RAVEN_URL, {
    environment: process.env.REACT_APP_ENVIRONMENT
}).install();

ReactDOM.render(
  <Routes history={browserHistory} />,
  document.getElementById('root')
);
