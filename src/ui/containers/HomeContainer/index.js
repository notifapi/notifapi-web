import React, { Component } from 'react';

import axios from 'axios';

import HomeContainerView from './HomeContainer.view'

class HomeContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: {}
        };
    }

    fetchUser() {
        return axios.post('/hello');
    }

    componentDidMount() {
        this.fetchUser().then(user => {
            this.setState({
                user: user.data
            });
        });
    }

    render() {
        return (
            <HomeContainerView user={this.state.user}/>
        );
    }
}

export default HomeContainer;
