import {
    validateUserFields, validateUserFieldsSuccess, validateUserFieldsFailure,
    signUpUser, signUpUserSuccess, signUpUserFailure } from '../actions/singup';

import { reduxForm } from 'redux-form';
import { connect } from 'react-redux';

import SingUp from '../components/SingUp';

//Client side validation
function validate(values) {
    var errors = {};
    var hasErrors = false;

    if (!values.username || values.username.trim() === '') {
        errors.username = 'Enter username';
        hasErrors = true;
    }

    if(!values.email || values.email.trim() === '') {
        errors.email = 'Enter email';
        hasErrors = true;
    }

    if(values.email && values.email.trim() !== '') {
        // regex from http://stackoverflow.com/questions/46155/validate-email-address-in-javascript
        var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if(!re.test(values.email)) {
            errors.email = 'The email is invalid';
            hasErrors = true;
        }
    }

    if(!values.password || values.password.trim() === '') {
        errors.password = 'Enter password';
        hasErrors = true;
    }

    if(values.password && values.password.trim() !== '' && values.password.length < 8) {
        errors.password = 'The password has to be more than 7 characters';
        hasErrors = true;
    }

    return hasErrors && errors;
}

//Async server side validation
const asyncValidate = (values, dispatch) => {

    return new Promise((resolve, reject) => {

        let error = {
            username: "We can not valid the form in the server",
            email: "We can not valid the form in the server"
        }

        dispatch(validateUserFields(values))
            .then((response) => {
                let data = response.error ? error : response.payload.data;
                //if status is not 200 or any one of the fields exist, then there is a field error
                if(response.error || response.payload.status != 200 || data.username || data.email) {
                    //let other components know of error by updating the redux` state
                    dispatch(validateUserFieldsFailure(response.payload));
                    reject(data); //this is for redux-form itself
                } else {
                    //let other components know that everything is fine by updating the redux` state
                    dispatch(validateUserFieldsSuccess(response.payload));
                    resolve();//this is for redux-form itself
                }
            });
    });
};

//Async server side sign up
const doSignUpUser = (values, dispatch) => {

    return new Promise((resolve, reject) => {

        dispatch(signUpUser(values))
            .then((response) => {
                let data = response.payload.data;
                //if any one of these exist, then there is a field error
                if(response.payload.status != 200) {
                    //let other components know of error by updating the redux` state
                    dispatch(signUpUserFailure(response.payload));
                    reject(data); //this is for redux-form itself
                } else {
                    //let other components know that we got user and things are fine by updating the redux` state
                    dispatch(signUpUserSuccess(response.payload));
                    resolve();//this is for redux-form itself
                }
            });
    });
};


const mapDispatchToProps = (dispatch) => {
    return {
        signUpUser: doSignUpUser
    }
}

const mapStateToProps = (state, ownProps) =>{
    return {
        user: state.singup.user
    };
}

let form = reduxForm({
    form: 'SignUp',
    fields: ['username', 'email', 'password'],
    asyncValidate,
    asyncBlurFields: ['username', 'email'],
    validate
});

export default connect(mapStateToProps, mapDispatchToProps)(form(SingUp));