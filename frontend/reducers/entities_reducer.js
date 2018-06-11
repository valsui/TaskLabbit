import { combineReducers } from 'redux';

import usersReducer from './users_reducer';
import taskTypeReducer from './task_type_reducer';
import taskReducer from './task_reducer';

const entitiesReducer = combineReducers({
    users: usersReducer,
    taskType: taskTypeReducer,
    tasks: taskReducer
});

export default entitiesReducer;