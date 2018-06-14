import merge from 'lodash/merge';

import { RECEIVE_TASK_TYPE, REMOVE_TASK_TYPE } from '../actions/task_button_action';
import { RECEIVE_TASK, REMOVE_PENDING_TASK } from '../actions/task_form_actions';

const defaultState = { task: '' };
const uiReducer = (state = defaultState, action) => {
    Object.freeze(state);
    switch(action.type){
        case RECEIVE_TASK_TYPE:
            return { task: action.task };
        case REMOVE_TASK_TYPE:
            return { task: '' };
        case RECEIVE_TASK:
            return merge({}, defaultState, action.payload);
        case REMOVE_PENDING_TASK:
            sessionStorage.removeItem('id');
            return {task: ''};
        default: 
            return state;
    }
}

export default uiReducer;