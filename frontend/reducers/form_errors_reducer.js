import { RECEIVE_FORM_ERROR, REMOVE_FORM_ERROR } from '../actions/task_form_actions';

const formErrorsReducer = (state =[], action) => {
        switch(action.type){
            case RECEIVE_FORM_ERROR:
                return action.error
            case REMOVE_FORM_ERROR:
                return []
            default:   
                return []                
        }
}

export default formErrorsReducer; 