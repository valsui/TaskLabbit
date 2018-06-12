import React from 'react';
import ReactDOM from 'react-dom';
// import { loginUser, signupUser, logoutUser } from './actions/session_actions';
import configureStore from './store/store.js';
import Root from './components/root';
import { fetchTaskers, fetchUser } from './util/user_util';

document.addEventListener('DOMContentLoaded', () => {
    const root = document.getElementById('root');

    window.fetchTaskers = fetchTaskers;
    window.fetchUser = fetchUser;
    
    let store;
    if (window.currentUser) {
        const preloadedState = {
            entities: {
                users: { [window.currentUser.id]: window.currentUser }
            },
            session: { currentUser: window.currentUser} 
        };
        store = configureStore(preloadedState);
        delete window.currentUser;
    } else {
        store = configureStore();
    }

    window.store = store;

    ReactDOM.render(<Root store={ store } />, root);
});
