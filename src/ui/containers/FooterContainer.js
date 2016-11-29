import React, { Component } from 'react';
import { connect } from 'react-redux';
import { currentYear } from '../actions/app';
import Footer from '../components/Footer.js';

const mapStateToProps = (state) => {
    return {
        currentYear: state.app.currentYear
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        doCurrentYear: () =>{
            dispatch(currentYear());
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Footer);