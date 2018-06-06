import sessionReducer from './session_reducer';
import usersReducer from './errors_reducer';
import errorsReducer from './users_reducer';
import { combineReducers } from 'redux';

export default combineReducers({
    entities: usersReducer,
    session: sessionReducer,
    errors: errorsReducer
});

