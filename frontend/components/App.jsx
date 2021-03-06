import React from 'react';
import LoginFormContainer from './session/login_form_container';
import SignUpFormContainer from './session/signup_form_container';
import MainHeadContainer from './main/splashhead_main_container';
import MainTaskForm from './form/main_task_form_container';
import Dashboard from './dashboard/dashboard_container';
import { Route, Switch, Redirect } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';

const App = () => (
    <div>
        <Switch>
            <AuthRoute exact path = '/login' component={LoginFormContainer}/>
            <AuthRoute exact path = '/signup' component={SignUpFormContainer}/>
            <ProtectedRoute exact path = '/dashboard' component={Dashboard}/>
            <Route exact path ='/' component = {MainHeadContainer}/>
            <Route path ='/task' component = {MainTaskForm} />
            <Redirect to='/' />
        </Switch>
    </div>
);

export default App;