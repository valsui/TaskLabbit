import React from 'react';
import { connect } from 'react-redux';
import Greeting from './greeting_component';

const mapStateToProps = (state, ownProps) => {
    return {
        user: state.session.currentUser
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        logout: (user) => dispatch(logout(user))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Greeting)