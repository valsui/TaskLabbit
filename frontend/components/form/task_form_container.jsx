import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import TaskForm from './task_form_component';

//need to write action to create post form the entire form 
//this from will contain the following components:
// Task interest
// Task location
// Task duration
// Task details
// Set time
// Tasker Index Container and Component
// Task confirm

const mapStateToProps = (state, ownProps) => {
    return {

    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        // ajax patch - thunk action
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(TaskForm))
