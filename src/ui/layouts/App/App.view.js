import React from 'react';

import Header from './Header';
import Footer from './Footer';

import './App.css';

function AppView(props) {
    return (
        <div>
            <Header />
            <div className="container">
                {props.children}
            </div>
            <Footer />
        </div>
    );
}

export default AppView;