import { combineReducers } from 'redux';
import user from './user';
import app from './app';
import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({
    user: user,
    app: app,
    form: formReducer
});

export default rootReducer;