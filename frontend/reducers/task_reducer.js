import { RECEIVE_TASK, RECEIVE_TASKS, REMOVE_TASK } from '../actions/task_form_actions';
import merge from 'lodash/merge'

const taskReducer = (state = {}, action) => {   
    Object.freeze(state);
    switch(action.type){
        case RECEIVE_TASKS:
            return merge({}, state, action.tasks);
        case RECEIVE_TASK:
            return merge({}, state, {[action.task.id]: action.task});
        case REMOVE_TASK:
            const newState = merge({}, state);
            delete newState[action.type.id];
            return newState
        default:
            return state
    }
}

export default taskReducer;