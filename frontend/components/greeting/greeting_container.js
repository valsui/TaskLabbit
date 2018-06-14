import React from 'react';
import { connect } from 'react-redux';
import Greeting from './greeting_component';
import { logoutUser } from '../../actions/session_actions';
import { withRouter } from 'react-router-dom';

const mapStateToProps = (state, ownProps) => {
    return {
        currentUser: state.session.currentUser,
        history: ownProps.history
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        logoutUser: () => dispatch(logoutUser())
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Greeting));