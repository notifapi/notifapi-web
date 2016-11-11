import React, { Component } from 'react';

import DashboardContainerView from './DashboardContainer.view'

class DashboardContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: {}
        };
    }

    render() {
        return (
            <DashboardContainerView />
        );
    }
}

export default DashboardContainer;
