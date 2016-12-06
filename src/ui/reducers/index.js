import { combineReducers } from 'redux';
import app from './app';
import singup from './singup';
import user from './user';

import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({
    app: app,
    singup: singup,
    user: user,
    form: formReducer
});

export default rootReducer;