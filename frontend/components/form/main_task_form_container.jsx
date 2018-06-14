import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import TaskForm from './main_task_form_component';
import { createTask, fetchTask, updateTask, fetchTasks, removeFormError, confirmTask } from '../../actions/task_form_actions';
import { fetchTaskers } from '../../actions/user_actions';
import { getTaskers, getByCurrentLocation } from '../../reducers/tasker_selectors';

//need to write action to create post form the entire form 
//this from will contain the following components:
// Task interest
// Task location
// Task duration
// Task details
// Set time
// Tasker Index Container and Component
// Task confirm

//this will have the following routes:
// 1) /task/new - TaskDetailsContainer

// 2) /task/pick
// 3) /task/confirm


const mapStateToProps = (state, ownProps) => {
    return {
        // taskType: state.ui.task,
        currentUser: state.session.currentUser,
        currentTask: Object.values(state.ui.task)[0] || {},
        errors: state.errors.formErrors,
        taskers: getByCurrentLocation(state)
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        createTask: (task) => dispatch(createTask(task)),
        fetchTask: (taskId) => dispatch(fetchTask(taskId)),
        updateTask: (task) => dispatch(updateTask(task)),
        fetchTasks: (currentUserId) => dispatch(fetchTasks(currentUserId)),
        removeFormError: () => dispatch(removeFormError()),
        fetchTaskers: (taskType) => dispatch(fetchTaskers(taskType)),
        confirmTask: (id) => dispatch(confirmTask(id))
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(TaskForm))
