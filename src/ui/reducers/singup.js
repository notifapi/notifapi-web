import {
    VALIDATE_USER_FIELDS, VALIDATE_USER_FIELDS_SUCCESS, VALIDATE_USER_FIELDS_FAILURE,
    RESET_VALIDATE_USER_FIELDS, SIGNUP_USER, SIGNUP_USER_SUCCESS, SIGNUP_USER_FAILURE
} from '../actions/singup';

const INITIAL_STATE = {error:null, loading: false};

export default function(state = INITIAL_STATE, action) {
    let error;
    switch(action.type) {
        case VALIDATE_USER_FIELDS://sign up or sign in form fields
            return { ...state, error:null, loading: true};
        case VALIDATE_USER_FIELDS_SUCCESS:// same as RESET_USER_FIELDS
            return { ...state, error:null, loading: false};
        case VALIDATE_USER_FIELDS_FAILURE:
            error = action.payload.data ? action.payload.data : {message: action.payload.message}
            return { ...state, error:error, loading: false};
        case SIGNUP_USER:// sign up user, set loading = true and status = signup
            return { ...state, error:null, loading: true};
        case SIGNUP_USER_SUCCESS:
            return { ...state, error:null, loading: false}; //<-- authenticated
        case SIGNUP_USER_FAILURE:// return error and make loading = false
            error = action.payload.data || {message: action.payload.message};//2nd one is network or server down errors
            return { ...state, error:error, loading: false};

        default:
            return state;
    }
}