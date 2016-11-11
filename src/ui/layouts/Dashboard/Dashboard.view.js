import React from 'react';

import Header from './Header';
import Footer from './Footer';

import './Dashboard.css';

function DashboardView(props) {
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

export default DashboardView;