import * as SessionAPIUtil from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';
export const REMOVE_ERRORS = 'REMOVE_ERRORS';

export const receiveCurrentUser = (currentUser) => ({
    type: RECEIVE_CURRENT_USER,
    currentUser
});

export const logoutCurrentUser = () => ({
    type: LOGOUT_CURRENT_USER
});

export const receiveErrors = (errors) => ({
    type: RECEIVE_ERRORS,
    errors
});

export const removeErrors = () => ({
    type: REMOVE_ERRORS
})

export const loginUser = user => dispatch => (
    SessionAPIUtil.login(user).then(res => dispatch(receiveCurrentUser(res)), err => dispatch(receiveErrors(err.responseJSON)))
);

export const signupUser = user => dispatch => (
    SessionAPIUtil.signup(user).then(res => dispatch(receiveCurrentUser(res)), err => dispatch(receiveErrors(err.responseJSON)))
);

export const logoutUser = () => dispatch => (
    SessionAPIUtil.logout().then(() => dispatch(logoutCurrentUser()))
);