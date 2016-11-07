import React from 'react';

import logo from './logo.svg';

import './App.css';

function AppView (props) {
    return (
        <div className="App">
            <div className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
                <h2>WatchIoT Notification API</h2>
            </div>
            <p className="App-intro">
                {props.children}
            </p>
        </div>
    );
}

export default AppView;