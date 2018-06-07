import React from 'react';
import { connect } from 'react-redux';
import SignupForm from './signup_form';
import { signupUser, removeErrors } from '../../actions/session_actions';
import { Link } from 'react-router-dom';

const mapStateToProps = ({ errors }) => {
    return {
        errors: errors.sessionErrors,
        formType: 'signup',
        fill: { 
            first_name: '',
            last_name: '',
            email: '',
            password: '',
            zipcode: ''
        }
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        action: (user) => dispatch(signupUser(user)),
        removeErrors: () => dispatch(removeErrors())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignupForm);