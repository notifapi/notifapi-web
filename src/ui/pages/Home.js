import React from 'react';
import { Component } from 'react';
import HomeContainer from '../containers/HomeContainer';
import SignUpContainer from '../containers/SignUpContainer';

export default class Home extends Component {
    render() {
        return (
            <HomeContainer >
                <SignUpContainer />
            </HomeContainer>
        );
    }
}