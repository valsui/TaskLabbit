import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import TaskForm from './main_task_form_component';
import { createTask, fetchTask, updateTask, fetchTasks, removeFormError } from '../../actions/task_form_actions';

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
        taskType: state.ui.task,
        currentUser: state.session.currentUser,
        task: state.entities.tasks,
        errors: state.errors.formErrors
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        createTask: (task) => dispatch(createTask(task)),
        fetchTask: (taskId) => dispatch(fetchTask(taskId)),
        updateTask: (task) => dispatch(updateTask(task)),
        fetchTasks: () => dispatch(fetchTasks()),
        removeFormError: () => dispatch(removeFormError())
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(TaskForm))
