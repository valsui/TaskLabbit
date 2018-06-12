import * as APITaskUtil from '../util/task_util';

export const RECEIVE_FORM_ERROR = 'RECEIVE_FORM_ERROR';
export const REMOVE_FORM_ERROR = 'REMOVE_FORM_ERROR';
export const RECEIVE_TASK = 'RECIEVE_TASK';
export const RECEIVE_TASKS = 'RECEIVE_TASKS';
export const REMOVE_TASK = 'REMOVE_TASK';

export const receiveFormError = (error) => {
    return {
        type: RECEIVE_FORM_ERROR,
        error: error
    }
}

export const removeFormError = () => {
    return {
        type: REMOVE_FORM_ERROR
    }
}

export const receiveTask = (payload) => {
    return {
        type: RECEIVE_TASK,
        payload
    }
}

export const receiveTasks = (payload) => {
    return {
        type: RECEIVE_TASKS,
        payload
    }
}

export const removeTask = (tasksId) => {
    return {
        type: REMOVE_TASK,
        taskId
    }
}

export const fetchTask = (tasksId) => (dispatch) => {
    // debugger;
    return APITaskUtil.fetchTask(tasksId).then((task) => dispatch(receiveTask(task)), (err) =>
    dispatch(receiveFormError(err.responseJSON)))
}

export const createTask = (task) => (dispatch) => {
    return APITaskUtil.createTask(task).then((task) => dispatch(receiveTask(task)), (err) =>
       dispatch(receiveFormError(err.responseJSON)))
}

export const updateTask = (task) => (dispatch) => (
    APITaskUtil.updateTask(task).then((task) => dispatch(receiveTask(task)), (err) =>
        dispatch(receiveFormError(err.responseJSON)))
)

export const deleteTask = (taskId) => (dispatch) => (
    APITaskUtil.deleteTask(taskId).then((task) => dispatch(removeTask(task.id)))
)

export const fetchTasks = (userId) => (dispatch) => (
    APITaskUtil.fetchTasks(userId).then((payload) => dispatch(receiveTasks(payload)))
)