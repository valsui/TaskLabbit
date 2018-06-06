import sessionReducer from './session_reducer';
import errorsReducer from './errors_reducer';
import usersReducer from './users_reducer';
import { combineReducers } from 'redux';

export default combineReducers({
    entities: usersReducer,
    session: sessionReducer,
    errors: errorsReducer
});

