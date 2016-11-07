import React, { Component } from 'react';

import axios from 'axios';

import HomeView from './Home.view'

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: {}
        };
    }

    fetchUser() {
        return axios.get('/hello');
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
            <HomeView user={this.state.user}/>
        );
    }
}

export default Home;
