import React from 'react';
import GreetingContainer from './greeting/greeting_container';
import LoginFormContainer from './session/login_form_container';
import SignUpFormContainer from './session/signup_form_container';
import TaskIndexContainer from './tasks/task_index_container';
import { Route, Switch } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';

const App = () => (
    <div>
        <header>
            <GreetingContainer/>
        </header>
        <Switch>
            <AuthRoute exact path = '/login' component={LoginFormContainer}/>
            <AuthRoute exact path = '/signup' component={SignUpFormContainer}/>
            <ProtectedRoute exact path = '/dashboard' component={TaskIndexContainer}/>
        </Switch>
    </div>
);

export default App;