import React from 'react';
import TaskIndex from './task_index';
import { connect } from 'react-redux';
import { fetchTasks, deleteTask } from '../../actions/task_form_actions';
import { withRouter } from 'react-router-dom';

const mapStateToProps = (state) => {
    return {
        ownTasks: Object.values(state.entities.tasks),
        currentUser: state.session.currentUser,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchTasks: (userId) => dispatch(fetchTasks(userId)),
        deleteTask: (taskId) => dispatch(deleteTask(taskId)),
    }
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(TaskIndex));