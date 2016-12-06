import {
    signUpUser, signUpUserSuccess, signUpUserFailure } from '../actions/users';

import {
    validateUserFields, validateUserFieldsSuccess,
    validateUserFieldsFailure, resetValidateUserFields } from '../actions/singup';

import SingUp from '../components/SingUp';
import { reduxForm } from 'redux-form';
import { connect } from 'react-redux';

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

    console.log(errors);
    return hasErrors && errors;
}


//For instant async server validation
const asyncValidate = (values, dispatch) => {

    return new Promise((resolve, reject) => {

        dispatch(validateUserFields(values))
            .then((response) => {
                let data = response.payload.data;
                //if status is not 200 or any one of the fields exist, then there is a field error
                if(response.payload.status != 200 || data.username || data.email) {
                    //let other components know of error by updating the redux` state
                    dispatch(validateUserFieldsFailure(response.payload));
                    reject(data); //this is for redux-form itself
                } else {
                    //let other components know that everything is fine by updating the redux` state
                    dispatch(validateUserFieldsSuccess(response.payload)); //ps: this is same as dispatching RESET_USER_FIELDS
                    resolve();//this is for redux-form itself
                }
            });
    });
};

//For any field errors upon submission (i.e. not instant check)
const validateAndSignUpUser = (values, dispatch) => {

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
                    //store JWT Token to browser session storage
                    //If you use localStorage instead of sessionStorage, then this w/ persisted across tabs and new windows.
                    //sessionStorage = persisted only in current tab
                    sessionStorage.setItem('jwtToken', response.payload.data.token);
                    //let other components know that we got user and things are fine by updating the redux` state
                    dispatch(signUpUserSuccess(response.payload));
                    resolve();//this is for redux-form itself
                }
            });
    });
};


const mapDispatchToProps = (dispatch) => {
    return {
        signUpUser: validateAndSignUpUser,
        resetMe: () =>{
            dispatch(resetValidateUserFields());
        }
    }
}

const mapStateToProps = (state, ownProps) =>{
    return {
        user: state.user,
        validateFields: state.validateFields
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