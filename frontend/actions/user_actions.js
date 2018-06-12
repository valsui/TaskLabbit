import * as UserAPIUtil from '../util/user_util';

export const RECEIVE_TASKERS = 'RECEIVE_TASKERS';

export const receiveTaskers = (taskers) => {
    return {
        type: RECEIVE_TASKERS,
        taskers: taskers
    }
}

export const fetchTaskers = (taskType) => (dispatch) => {
    return UserAPIUtil.fetchTaskers(taskType).then((taskers) => dispatch(receiveTaskers(taskers)))
}
