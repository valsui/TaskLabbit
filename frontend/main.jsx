import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store.js';
import Root from './components/root';
// import { receiveTaskers } from './actions/user_actions';
// import { receiveTasks } from './actions/task_form_actions';
// import { fetchTaskers } from './util/user_util';
// import { fetchTasks } from './util/task_util';


document.addEventListener('DOMContentLoaded', () => {
    const root = document.getElementById('root');

    // debugger;
    // sessionStorage.setItem('id', 4);
    let store;
    let preloadedState = { 
        entities: {
            users:{}
        },
        session: {
            currentUser: '',
            currentTaskId: ''
        }
    };
    if (window.currentUser) {
        preloadedState.entities.users = { [window.currentUser.id]: window.currentUser };
        preloadedState.session.currentUser = window.currentUser;
        delete window.currentUser;
    } else {
        store = configureStore();
    }

    if (sessionStorage.getItem('id')){
        preloadedState.session.currentTaskId = parseInt(sessionStorage.getItem('id'));
    }
    store = configureStore(preloadedState);

    window.store = store;

    ReactDOM.render(<Root store={ store } />, root);
});
