import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PickTaskerForm from './main_choose_tasker_component';
import { createTask, fetchTask, updateTask, fetchTasks, removeFormError } from '../../actions/task_form_actions';

const mapStateToProps = (state, ownProps) => {
    return {
        taskId: null
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchTask: (taskId) => dispatch(fetchTask(taskId))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PickTaskerForm);