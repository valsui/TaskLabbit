import React from 'react';
import { connect } from 'react-redux';
import { addTasktoUI } from '../../actions/task_button_action';
import TaskButtonComponent from './task_button_component';
import { withRouter } from 'react-router-dom';


const mapStateToProps = (state, ownProps) => {
    return {
        taskName: ownProps.taskName,
        buttonText: ownProps.buttonText,
        class: ownProps.addClass
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        addTasktoUI: (task) => dispatch(addTasktoUI(task))
    }
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(TaskButtonComponent));