
import React from 'react';
import { Component } from 'react';

export default class Home extends Component {

    render() {
        return(
            <h1>
                {this.props.children}
            </h1>
        )
    }
}