import React, { Component } from 'react';

import MainView from './MainView.view'

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: {}
        };
    }

    render() {
        return (
            <MainView />
        );
    }
}

export default Main;
