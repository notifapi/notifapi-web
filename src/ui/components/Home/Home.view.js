import React from 'react';

function HomeView (props) {
    return (
        <div>
            <p>Hello {props.user.user || 'empty'}</p>
        </div>
    );
}

export default HomeView;