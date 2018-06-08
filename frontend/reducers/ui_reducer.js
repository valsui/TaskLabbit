import { RECEIVE_TASK_TYPE, REMOVE_TASK_TYPE } from '../actions/task_button_action';

const defaultState = { task: '' };
const uiReducer = (state = defaultState, action) => {
    // debugger; //THIS IS GIVING WEIRD ERRORS!
    Object.freeze(state);
    switch(action.type){
        case RECEIVE_TASK_TYPE:
            return { task: action.task };
        case REMOVE_TASK_TYPE:
            return { task: '' };
        default: 
            return state;
    }
}

export default uiReducer;