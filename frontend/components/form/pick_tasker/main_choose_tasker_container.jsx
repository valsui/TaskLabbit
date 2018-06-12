import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PickTaskerForm from './main_choose_tasker_component';
import { fetchTask, updateTask, fetchTaskers, removeFormError } from '../../actions/task_form_actions';

const mapStateToProps = (state, ownProps) => {
    return {
        currentPost: state.entities.tasks
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchTask: (taskId) => dispatch(fetchTask(taskId)),
        updateTask: (task) => dispatch(updateTask(task)),
        fetchTaskers: (taskType) => dispatch(fetchTaskers(taskType)),
        removeFormError: () => dispatch(removeFormError())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PickTaskerForm);