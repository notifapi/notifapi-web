import React, {Component} from 'react';

import HeaderView from './Header.view'

class Header extends Component {
    render() {
        return (
            <HeaderView children={this.props.children}/>
        );
    }
}

export default Header;
