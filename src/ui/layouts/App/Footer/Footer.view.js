import React from 'react';

import './Footer.css';

function FooterView(props) {
    return (
        <footer>
            <div>© {props.year} WatchIoT</div>
        </footer>
    )
}

export default FooterView;