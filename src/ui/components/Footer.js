import React from 'react';
import { Component } from 'react';

export default class Footer extends Component {
    componentWillMount() {
        this.props.doCurrentYear();
    }

    render() {
        return(
            <footer>
                <div>© {this.props.currentYear} NotifAPI</div>
            </footer>
        )
    }
}