import React from 'react';
import { Component } from 'react';
import HomeContainer from '../containers/HomeContainer';
import SingUpContainer from '../containers/SingUpContainer';

export default class Home extends Component {
    render() {
        return (
            <HomeContainer >
                <SingUpContainer />
            </HomeContainer>
        );
    }
}