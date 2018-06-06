import React from 'react';
import ReactDOM from 'react-dom';
// import { loginUser, signupUser, logoutUser } from './actions/session_actions';
import configureStore from './store/store.js';
import Root from './components/root';

document.addEventListener('DOMContentLoaded', () => {
    const root = document.getElementById('root');
    const store = configureStore();
    
    window.dispatch = store.dispatch;
    window.getState = store.getState;
    // window.login = loginUser;
    // window.logout = logoutUser;
    // window.signup = signupUser;

    ReactDOM.render(<Root store={ store } />, root);
});