import { RECEIVE_TASK, RECEIVE_TASKS, REMOVE_TASK } from '../actions/task_form_actions';
import merge from 'lodash/merge'

const taskReducer = (state = {}, action) => {   
    // debugger;
    Object.freeze(state);
    switch(action.type){
        case RECEIVE_TASKS:
            // return merge({}, state, action.tasks);
            return action.payload.tasks;
        case RECEIVE_TASK:
            return merge({}, state, action.payload.task);
        case REMOVE_TASK:
            const newState = merge({}, state);
            delete newState[action.task.id];
            return newState;
        default:
            return state
    }
}

export default taskReducer;