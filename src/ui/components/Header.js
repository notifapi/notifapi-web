import React from 'react';
import { Component } from 'react';

export default class Header extends Component {

    render() {
        return(
            <header role="banner" className="navbar navbar-custom navbar-static-top">
                <div className="container">
                    <div className="navbar-header"><a className="navbar-brand" href="/">NotifAPI</a>

                    </div>
                    <div className="navbar-collapse bs-navbar-collapse collapse">
                        <ul id="top" role="navigation" className="nav navbar-nav">
                            <li><a href="/features">Features</a></li>
                            <li><a href="/docs">Docs</a></li>
                            <li><a href="/about">About</a></li>
                            <li><a href="/blog">Blog</a></li>
                        </ul>
                        <ul id="sing-in" role="navigation" className="nav navbar-nav navbar-right">
                            <li><a href="/sing-in">SIGN IN</a></li>
                        </ul>
                    </div>
                </div>
            </header>
        )
    }
}