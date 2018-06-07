import { RECEIVE_ERRORS, RECEIVE_CURRENT_USER, REMOVE_ERRORS } from '../actions/session_actions';


const sessionErrorsReducer = (state = [], action) => {
    switch (action.type) {
        case RECEIVE_ERRORS:
            return action.errors;
        case RECEIVE_CURRENT_USER:
            return [];
        case REMOVE_ERRORS:
            return [];
        default:
            return state;
    }
};

export default sessionErrorsReducer;