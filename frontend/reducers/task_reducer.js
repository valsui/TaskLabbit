import { RECEIVE_TASK, RECEIVE_TASKS, REMOVE_TASK } from '../actions/task_form_actions';
import merge from 'lodash/merge'

const taskReducer = (state = {}, action) => {   
    Object.freeze(state);
    switch(action.type){
        case RECEIVE_TASKS:
            // return merge({}, state, action.payload.tasks);
            return action.payload.tasks || {};
        case RECEIVE_TASK:
            sessionStorage.setItem('id', Object.values(action.payload.task)[0].id);
            return merge({}, state, action.payload.task);
        case REMOVE_TASK:
            const newState = merge({}, state);
            delete newState[Object.values(action.payload.task)[0].id];
            return newState;
        default:
            return state
    }
}

export default taskReducer;