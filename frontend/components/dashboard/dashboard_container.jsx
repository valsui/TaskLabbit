import React from 'react';
import { connect } from 'react-redux';
import DashboardComponent from './dashboard_component';
import { fetchTasks, deleteTask, removePendingTask }from '../../actions/task_form_actions';
import { withRouter } from 'react-router-dom';

//going to need to fetch all tasks

const mapStateToProps = (state, ownProps) => {
    return{
        ownTasks: Object.values(state.entities.tasks),
        currentUser: state.session.currentUser,
        currentTask: state.ui.task
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchTasks: (userId) => dispatch(fetchTasks(userId)),
        deleteTask: (id) => dispatch(deleteTask(id)),
    }
}


export default withRouter(connect(mapStateToProps,mapDispatchToProps)(DashboardComponent));