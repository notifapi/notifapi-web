import React, { Component } from 'react';
import { connect } from 'react-redux';
import ConfirmEmail from '../components/ConfirmEmail.js';

const mapStateToProps = (state, ownProps) =>{
    return {
        user: state.signup && state.signup.user
    };
}

export default connect(mapStateToProps, null)(ConfirmEmail);