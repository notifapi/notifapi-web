import {
    CURRENT_YEAR
} from '../actions/app';


const INITIAL_STATE = {currentYear: null};

export default function(state = INITIAL_STATE, action) {

    switch(action.type) {

        case CURRENT_YEAR:
            return { ...state, currentYear: new Date().getFullYear() };

        default:
            return state;
    }
}