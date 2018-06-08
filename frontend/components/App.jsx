import React from 'react';
import LoginFormContainer from './session/login_form_container';
import SignUpFormContainer from './session/signup_form_container';
import TaskIndexContainer from './tasks/task_index_container';
import MainHeadContainer from './main/splashhead_main_container';
import TaskDetailsForm from './form/details/task_details_main_component';
import { Route, Switch, Redirect } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';

const App = () => (
    <div>
        <Switch>
            <AuthRoute exact path = '/login' component={LoginFormContainer}/>
            <AuthRoute exact path = '/signup' component={SignUpFormContainer}/>
            <ProtectedRoute exact path = '/dashboard' component={TaskIndexContainer}/>
            <Route exact path ='/' component = {MainHeadContainer}/>
            <Route exact path ='/task/new' component = {TaskDetailsForm}/>
            <Redirect to='/' />
        </Switch>
    </div>
);

export default App;