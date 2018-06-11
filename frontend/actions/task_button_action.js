//will update the ui statem 

export const RECEIVE_TASK_TYPE = 'RECEIVE_TASK_TYPE';
export const REMOVE_TASK_TYPE = 'REMOVE_TASK_TYPE';

//action to pass down the task type from the button or the search bar
export const addTasktoUI = (task) => {
    return {
        type: RECEIVE_TASK_TYPE,
        task : task
    }
}

export const removeTaskFromUI = () => {
    return {
        type: REMOVE_TASK_TYPE
    }
}