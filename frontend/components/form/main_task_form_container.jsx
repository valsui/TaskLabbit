import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import TaskForm from './main_task_form_component';

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
        task: {
            type: this.state.ui.task,
            interest: '',
            location: '',
            duration: '',
            details: '',
            tasker: '',
            time: '',
            date: ''
        }
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        // ajax patch - thunk action
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(TaskForm))
