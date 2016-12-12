
import React, { Component, PropTypes } from 'react';

export default class Header extends Component {
    static contextTypes = {
        router: PropTypes.object
    };

    componentDidMount() {
        if(!this.props.user) {
            this.context.router.push('/');
        }
    }

    render() {
        let user = this.props.user;
        return(
            <div className="container">
                <h1>Confirm email to complete the sign up process!!! {user && user.user && user.user.username}</h1>
            </div>
        )
    }
}