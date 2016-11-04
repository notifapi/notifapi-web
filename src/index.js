import React from 'react';
import ReactDOM from 'react-dom';

/** tracer alert and js erros **/
import Raven from 'raven-js';

import { browserHistory } from 'react-router';

import Routes from './ui/routes';

import './index.css';

import config from './config';

Raven.config(config.get("raven_url")).install()

ReactDOM.render(
  <Routes history={browserHistory} />,
  document.getElementById('root')
);
