import React, {Component} from 'react';

import DashboardView from './Dashboard.view'

class Dashboard extends Component {
    render() {
        return (
            <DashboardView children={this.props.children}/>
        );
    }
}

export default Dashboard;
