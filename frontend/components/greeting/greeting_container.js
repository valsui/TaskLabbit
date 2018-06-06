import React from 'react';
import { connect } from 'react-redux';
import Greeting from './greeting_component';
import { logoutUser } from '../../actions/session_actions';

const mapStateToProps = (state, ownProps) => {
    return {
        currentUser: state.session.currentUser
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        logoutUser: () => dispatch(logoutUser())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Greeting);