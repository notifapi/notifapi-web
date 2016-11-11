import React, {Component} from 'react';

import AppView from './App.view'

class App extends Component {
    render() {
        return (
            <AppView children={this.props.children}/>
        );
    }
}

export default App;
