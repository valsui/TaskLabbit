import React from 'react';
import GreetingContainer from '../greeting/greeting_container';
import TaskTimeline from './banner/task_timeline_component';
import TrustSafetyBanner from './banner/trust_safety_component';
import TaskDetailsForm from './details/task_details_main_component';
import PickTaskerForm from './pick_tasker/main_choose_tasker_component';
import ConfirmTaskForm from './confirm_task/confirm_task_component';
import Footer from '../footer/footer_component';
import { Route } from 'react-router-dom';
import merge from 'lodash/merge';
import { verifyAddress } from '../../util/helpers';
// import parser from 'parse-address';

//components to make and import
// Task interest
// Task location
// Task duration
// Task details
// Set time
// Tasker Index Container and Component
// Task confirm

class TaskForm extends React.Component{
    constructor(props){
        super(props);

        const currentUser = this.props.currentUser;
        this.state = {
            task: {
                user_id: currentUser ? currentUser.id : null,
                task_type: window.sessionStorage.getItem('taskType'),
                need_vehicle: this.props.currentTask.need_vehicle || false,
                location: this.props.currentTask.location || '',
                duration: this.props.currentTask.duration || '',
                description: this.props.currentTask.description || '',
                tasker_id: this.props.currentTask.tasker_id || null,
                time: this.props.currentTask.time || "I'm flexible",
                date: this.props.currentTask.date || ''
            },
            errors: {
                need_vehicle: " ",
                location: " ",
                duration: " ",
                description: " ",
                time: "",
                date: " ",
                tasker_id: " "
            },
        }
        
        this.handleChange = this.handleChange.bind(this);
        this.handleSubformSubmit = this.handleSubformSubmit.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleErrorSubmit = this.handleErrorSubmit.bind(this);
        this.renderSubError = this.renderSubError.bind(this);
        this.demoAddress = this.demoAddress.bind(this);
    }

    componentDidMount(){
        this.props.removeFormError();
        if (sessionStorage.getItem('id')){
            this.props.fetchTask(sessionStorage.getItem('id'));
        }
    }

    componentWillReceiveProps(newProps){
        if(this.props.currentTask){
            let newState = merge({}, this.state);
            newState.task.id = (this.props.currentTask.id);
            newState.task.user_id = (this.props.currentUser ? this.props.currentUser.id : null);
            newState.task.task_type = (window.sessionStorage.getItem('taskType'));
            newState.task.need_vehicle = (this.props.currentTask.need_vehicle || false);
            newState.task.location = (this.props.currentTask.location || '');
            newState.task.duration = (this.props.currentTask.duration || '');
            newState.task.description = (this.props.currentTask.description || '');
            newState.task.tasker_id = (this.props.currentTask.tasker_id || null);
            newState.task.time = (this.props.currentTask.time || "I'm flexible");
            newState.task.date = (this.props.currentTask.date || '');        
            this.setState(newState);
        }
        //can use prevState and put a callback in set
    }

// on change handlers - lots of code spaghetti because this handles different input types - like radio buttons and selectors
    handleChange(type, ...args){
        let event;
        let path;
        if (args.length === 2) {
            path = args[0];
            event = args[1];
        } else {
            event = args[0];
        }
        let newState = merge({}, this.state)
        if(event.type){
            newState.task[type] = event.currentTarget.value;
        }else{
            newState.task[type] = event;
        }
        if(path){
            this.setState(newState, () => this.handleErrorSubmit(type, path, event));
        }else{
            this.setState(newState, () => this.handleErrorSubmit(type, event));
        }
    }

//demoaddress button
    demoAddress(e){
        e.preventDefault();
        let newState = merge({}, this.state);
        newState.task['location'] = '825 Battery Street San Francisco, CA 96458';
        this.setState(newState, () => {
            this.handleErrorSubmit('location', e)
        });
    }

//Will update with user id on the confirmation page. Special action to clear the ui slice of state that contains the current task in order to redirect to the user dashboard once the user has successfully logged in and confirmed the task.
    handleSubmit(e){
        e.preventDefault();
        if(this.props.currentUser){
            let newState = merge({}, this.state);

            newState.task.user_id = this.props.currentUser.id;
            this.setState(newState, () => this.props.confirmTask(this.state.task).then(() => this.props.history.push('/dashboard')));
        }else{
            this.props.history.push('/login');
        }
    }

// This function will handle rendering the new form for the subforms.Buttons will not function until errors are cleared on teh page.
    handleSubformSubmit(path) {
        const error = this.state.errors;
        if(this.props.location.pathname.includes('/new')){
            if(!error['location'] && !error['duration'] && !error['description'] && !error['need_vehicle']){
                //handle need_vehicle in post
                if (this.state.task.need_vehicle === 'Not needed for task'){
                    let newState = merge({}, this.state)
                    newState.task.need_vehicle = false;
                    this.setState(newState, () => this.props.createTask(this.state.task).then(() => this.props.history.push(path)));
                } else if (!sessionStorage.getItem('id')){
                    this.props.createTask(this.state.task).then(() => this.props.history.push(path));
                }else{
                    this.props.updateTask(this.state.task).then(() => this.props.history.push(path));
                }
            }
        }else if(this.props.location.pathname.includes('/price')){
            if(!error['time'] && !error['date'] && !error['tasker_id']){
                this.props.updateTask(this.state.task).then(() => this.props.history.push(path));
            }
        }
    }

    
//Handles errors in the local state on change. This function will validate the location to ensure that a zipcode is present and make sure that no fields are left blank. 
    handleErrorSubmit(type, ...args){
        let event;
        let path;
        if(args.length === 2){
            path = args[0];
            event = args[1];
        }else{
            event = args[0];
        }
        if(event.type){
            event.preventDefault();
        }
        let newState = merge({}, this.state)
        if(type === 'location'){
            if(verifyAddress(this.state.task.location)){
                newState.errors[type] = false;
            }else{
                newState.errors[type] = 'Please enter valid address';
            }
        }else{
            if (this.state.task[type]){
                newState.errors[type] = false;
            }else{
                newState.errors[type] = 'Cannot be blank';
            }
        }
        if(path){
            //handles the action of the buttons that need to render a new route
            // debugger;
            this.setState(newState, () => this.handleSubformSubmit(path));
        }else {
            this.setState(newState);
        }
    }

//renders database errors
    renderErrors() {
        if (this.props.errors) {
            return (
                <ul className='form-errors'>
                    {this.props.errors.map((error, i) => (
                        <li key={`error-${i}`}>
                            {error}
                        </li>
                    ))}
                </ul>
            )
        }
    };
    
// renders local form errors
    renderSubError(type){
        if(this.state.errors[type]){
            return(
                <span className='sub-error'>{this.state.errors[type]}</span>
            )
        }
    }

    render(){
        const TaskDetails = (props) => {
            return (
                <TaskDetailsForm currentState={this.state} 
                                handleChange={this.handleChange} 
                                removeFormErrors = {this.props.removeFormError}
                                handleErrorSubmit = {this.handleErrorSubmit}
                                renderSubError = {this.renderSubError}
                                currentTask={this.props.currentTask}
                                fetchTask={this.props.fetchTask}
                                demoAddress={this.demoAddress}
                                {...props}/>
            ) 
        }  
        
        const PickTasker = (props) => {
            return (
                <PickTaskerForm currentState={this.state}
                                handleChange={this.handleChange}
                                removeFormErrors={this.props.removeFormError}
                                handleErrorSubmit={this.handleErrorSubmit}
                                renderSubError={this.renderSubError}
                                taskers = {this.props.taskers}
                                fetchTaskers = {this.props.fetchTaskers}
                                currentTask = {this.props.currentTask}
                                fetchTask={this.props.fetchTask}
                                {...props}/>
            )
        }

        // confirm task 
        const ConfirmTask = (props) => {
            return (
                <ConfirmTaskForm currentState={this.state}
                    handleChange={this.handleChange}
                    removeFormErrors={this.props.removeFormError}
                    handleSubmit={this.handleSubmit}
                    renderSubError={this.renderSubError}
                    taskers={this.props.taskers}
                    fetchTask={this.props.fetchTask}
                    currentTask={this.props.currentTask}
                    fetchTaskers={this.props.fetchTaskers}
                    {...props} />
            )
        }
       
        return (
            <div>
                <GreetingContainer/>
                <TaskTimeline/>
                <TrustSafetyBanner/>
                <div className = 'task-type-error'>
                    {this.renderErrors()}
                </div>
                <Route exact path = '/task/new' render = {TaskDetails} />
                <Route exact path = '/task/price' render = {PickTasker} />
                <Route exact path = '/task/confirm' render = {ConfirmTask} />
                <Footer/>
            </div>
        )
    }
}

export default TaskForm;
