import React from 'react';

import './Header.css';

function HeaderView() {
    return (
        <header role="banner" className="navbar navbar-custom navbar-static-top">
            <div className="container">
                <div className="navbar-header"><a className="navbar-brand" href="/">WatchIoT Notification API</a>

                </div>
                <div className="navbar-collapse bs-navbar-collapse collapse">
                    <ul id="top" role="navigation" className="nav navbar-nav">
                        <li><a href="#getting-started">Getting started</a></li>
                        <li><a href="#notification">Type of Notifications</a></li>
                        <li><a href="#about">About</a></li>
                    </ul>
                </div>
            </div>
        </header>
    )
}

export default HeaderView;