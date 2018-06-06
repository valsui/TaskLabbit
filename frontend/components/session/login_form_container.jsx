import React from 'react';
import { connect } from 'react-redux';
import LoginForm from './login_form';
import { loginUser } from '../../actions/session_actions';
import { Link } from 'react-router-dom';

const mapStateToProps = (state) => {
    return {
        errors: state.errors.sessionErrors,
        formType: 'login',
        fill: {
            email: '',
            password: ''
        }
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        action: (user) => dispatch(loginUser(user))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);