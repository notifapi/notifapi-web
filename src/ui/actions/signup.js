import axios from 'axios';

//Validate user fields like username, email and password for the register
export const VALIDATE_USER_FIELDS = 'VALIDATE_USER_FIELDS';
export const VALIDATE_USER_FIELDS_SUCCESS = 'VALIDATE_USER_FIELDS_SUCCESS';
export const VALIDATE_USER_FIELDS_FAILURE = 'VALIDATE_USER_FIELDS_FAILURE';

//Sign Up User
export const SIGNUP_USER = 'SIGNUP_USER';
export const SIGNUP_USER_SUCCESS = 'SIGNUP_USER_SUCCESS';
export const SIGNUP_USER_FAILURE = 'SIGNUP_USER_FAILURE';

export function validateUserFields(values) {
    const request = axios.post(`/sign-up/validate`, values);

    return {
        type: VALIDATE_USER_FIELDS,
        payload: request
    };
}

export function validateUserFieldsSuccess() {
    return {
        type: VALIDATE_USER_FIELDS_SUCCESS
    };
}

export function validateUserFieldsFailure(error) {
    return {
        type: VALIDATE_USER_FIELDS_FAILURE,
        payload: error
    };
}

export function signUpUser(formValues) {
    const request = axios.post(`/sign-up`, formValues);

    return {
        type: SIGNUP_USER,
        payload: request
    };
}

export function signUpUserSuccess(user) {
    return {
        type: SIGNUP_USER_SUCCESS,
        payload: user
    };
}

export function signUpUserFailure(error) {
    return {
        type: SIGNUP_USER_FAILURE,
        payload: error
    };
}