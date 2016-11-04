import React from 'react';
import ReactDOM from 'react-dom';

/** tracer alert and js erros **/
import Raven from 'raven-js';

import { browserHistory } from 'react-router';

import Routes from './ui/routes';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';

import './index.css';

Raven.config(process.env.REACT_APP_RAVEN_URL).install();

ReactDOM.render(
  <Routes history={browserHistory} />,
  document.getElementById('root')
);
