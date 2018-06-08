import React from 'react';
import { connect } from 'react-redux';
import MainHeadComponent from './splashhead_main_component';
import { removeTaskFromUI } from '../../actions/task_button_action';

const mapStateToProps = (state, ownProps) => {
    return {
        // state:state
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        removeTaskFromUI: () => dispatch(removeTaskFromUI()) 
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainHeadComponent);
