import React from 'react';
import { Link } from 'react-router'

function HomeView (props) {
    return (
        <div>
            <p>Hello <Link to="Login">{props.user.user || 'empty'}</Link></p>
        </div>
    );
}

export default HomeView;