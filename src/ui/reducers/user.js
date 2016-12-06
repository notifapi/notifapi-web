import {
    VALIDATE_EMAIL, VALIDATE_EMAIL_SUCCESS, VALIDATE_EMAIL_FAILURE,
    ME_FROM_TOKEN, ME_FROM_TOKEN_SUCCESS, ME_FROM_TOKEN_FAILURE, RESET_TOKEN,
    SIGNUP_USER, SIGNUP_USER_SUCCESS, SIGNUP_USER_FAILURE, RESET_USER,
    SIGNIN_USER, SIGNIN_USER_SUCCESS,  SIGNIN_USER_FAILURE,
    LOGOUT_USER, UPDATE_USER_EMAIL,
    VALIDATE_USER_FIELDS, VALIDATE_USER_FIELDS_SUCCESS, VALIDATE_USER_FIELDS_FAILURE, RESET_VALIDATE_USER_FIELDS
} from '../actions/users';


//user = userobj, 
// status can be: 
// 1. 'storage' ie. localstorage / sessionstorage)
// 2. 'signup' (signing up) 
// 3. 'signin' (signing in)
// 4. 'validate'(validate fields)
// 5. 'validate_email' (validating email token)
// 5. 'authenticated'(after signin) 
// 6. 'logout' (after logout)

const INITIAL_STATE = {user: null, status:null, error:null, loading: false};

export default function(state = INITIAL_STATE, action) {
    let error;
    switch(action.type) {

        case ME_FROM_TOKEN:// loading currentUser("me") from jwttoken in local/session storage storage,
            return { ...state, user: null, status:'storage', error:null, loading: true};
        case ME_FROM_TOKEN_SUCCESS://return user, status = authenticated and make loading = false
            return { ...state, user: action.payload.data.user, status:'authenticated', error:null, loading: false}; //<-- authenticated
        case ME_FROM_TOKEN_FAILURE:// return error and make loading = false
            error = action.payload.data || {message: action.payload.message};//2nd one is network or server down errors
            return { ...state, user: null, status:'storage', error:error, loading: false};
        case RESET_TOKEN:// remove token from storage make loading = false
            return { ...state, user: null, status:'storage', error:null, loading: false};

        case SIGNIN_USER:// sign in user,  set loading = true and status = signin
            return { ...state, user: null, status:'signin', error:null, loading: true};
        case SIGNIN_USER_SUCCESS://return authenticated user,  make loading = false and status = authenticated
            return { ...state, user: action.payload.data.user, status:'authenticated', error:null, loading: false}; //<-- authenticated
        case SIGNIN_USER_FAILURE:// return error and make loading = false
            error = action.payload.data || {message: action.payload.message};//2nd one is network or server down errors
            return { ...state, user: null, status:'signin', error:error, loading: false};


        case LOGOUT_USER:
            return {...state, user:null, status:'logout', error:null, loading: false};

        default:
            return state;
    }
}