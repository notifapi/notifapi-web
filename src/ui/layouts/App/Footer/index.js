import React, {Component} from 'react';

import FooterView from './Footer.view'

class Footer extends Component {
    render() {
        return (
            <FooterView children={this.props.children}/>
        );
    }
}

export default Footer;
