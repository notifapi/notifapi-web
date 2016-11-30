import React from 'react';
import { Component } from 'react';
import AppContainer from '../containers/AppContainer';
import HeaderContainer from '../containers/HeaderContainer';
import FooterContainer from '../containers/FooterContainer';

export default class App extends Component {
    render() {
        return (
            <div>
                <HeaderContainer />
                <AppContainer>
                    {this.props.children}
                </AppContainer>
                <FooterContainer />
            </div>
        );
    }
}