import { combineReducers } from 'redux';
import app from './app';
import signup from './signup';
import user from './user';

import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({
    app: app,
    signup: signup,
    user: user,
    form: formReducer
});

export default rootReducer;