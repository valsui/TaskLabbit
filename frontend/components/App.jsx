import React from 'react';
import GreetingContainer from './greeting/greeting_container';
import LoginFormContainer from './session/login_form_container';
import SignUpFormContainer from './session/signup_form_container';
import { Route } from 'react-router-dom';
import { AuthRoute, Protected } from '../util/route_util';

const App = () => (
    <div>
        <header>
            <h1>HELLO LABBIT</h1>
            <GreetingContainer />
        </header>

        <AuthRoute exact path = '/login' component={LoginFormContainer}/>
        <AuthRoute exact path = '/signup' component={SignUpFormContainer}/>
    </div>
);

export default App;