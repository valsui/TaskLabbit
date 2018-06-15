import { RECEIVE_CURRENT_USER } from '../actions/session_actions';
import { RECEIVE_TASKERS } from '../actions/user_actions';
import merge from 'lodash/merge'

const usersReducer = (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            return merge({}, state, { [action.currentUser.id]: action.currentUser });
        case RECEIVE_TASKERS:
        // debugger;
            return action.taskers.users || {};
            // return merge({}, state, action.taskers.users)
        default:
            return state;
    }
};

export default usersReducer;
