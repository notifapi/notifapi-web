import {
    VALIDATE_USER_FIELDS, VALIDATE_USER_FIELDS_SUCCESS, VALIDATE_USER_FIELDS_FAILURE,
    SIGNUP_USER, SIGNUP_USER_SUCCESS, SIGNUP_USER_FAILURE } from '../actions/singup';

const INITIAL_STATE = {user: null, error: null, loading: false};

export default function(state = INITIAL_STATE, action) {
    let error;
    switch(action.type) {
        case VALIDATE_USER_FIELDS://sign up or sign in form fields
            return { ...state, user: null, error: null, loading: true};
        case VALIDATE_USER_FIELDS_SUCCESS:
            return { ...state, user: null, error: null, loading: false};
        case VALIDATE_USER_FIELDS_FAILURE:
            error = action.payload;
            return { ...state, user: null, error: error, loading: false};

        case SIGNUP_USER:// sign up user, set loading = true
            return { ...state, user: null, error: null, loading: true};
        case SIGNUP_USER_SUCCESS:
            let user = action.payload.data;
            return { ...state, user: user, error: null, loading: false}; //<-- signup OK
        case SIGNUP_USER_FAILURE:// return error and make loading = false
            error = action.payload.data || { message: action.payload}; //2nd one is network or server down errors
            return { ...state, user: null, error: error, loading: false};

        default:
            return state;
    }
}