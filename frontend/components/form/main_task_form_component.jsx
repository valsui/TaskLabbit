import React from 'react';
import GreetingContainer from '../greeting/greeting_container';
import TaskTimeline from './banner/task_timeline_component';
import TrustSafetyBanner from './banner/trust_safety_component';
import TaskDetailsForm from './details/task_details_main_component';
import PickTaskerForm from './pick_tasker/main_choose_tasker_component';
import ConfirmTaskForm from './confirm_task/confirm_task_component';
import { Route } from 'react-router-dom';
import merge from 'lodash/merge';
import parser from 'parse-address';

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
                tasker_id: null,
                time: this.props.currentTask.time || "I'm flexible",
                date: this.props.currentTask.date || ''
                // id: this.props.currentTask.id
            },
            errors: {
                need_vehicle: " ",
                location: " ",
                duration: " ",
                description: " ",
                time: " ",
                date: " ",
                tasker_id: " "
            },
        }
        
        this.handleChange = this.handleChange.bind(this);
        this.handleSubformSubmit = this.handleSubformSubmit.bind(this);
        this.handleSubmit = this.handleSubformSubmit.bind(this);
        this.handleErrorSubmit = this.handleErrorSubmit.bind(this);
        this.renderSubError = this.renderSubError.bind(this);
    }

    componentDidMount(){
        this.props.removeFormError();
    }

    componentWillReceiveProps(newProps){
        if(this.props.currentTask){
            let newState = merge({}, this.state)
            newState.task.id = this.props.currentTask.id;
            this.setState(newState);
        }
    }

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
        // console.log(this.props, type, e, this.state);
    }

    handleSubmit(e){
        // e.preventDefault;
        //dispatch update Task;
        if(this.props.currentUser){
            this.props.updateTask(this.state.task).then(() => this.props.history.push('/dashboard'));
        }else{
            this.props.history.push('/login');
        }
    }

    handleSubformSubmit(path, e) {
        // e.preventDefault();
        const error = this.state.errors;
        if(this.props.location.pathname.includes('/new')){
            if(!error['location'] && !error['duration'] && !error['description'] && !error['need_vehicle']){
                //handle vehicle 
                if (this.state.task.need_vehicle === 'Not needed for task'){
                    let newState = merge({}, this.state)
                    newState.task.need_vehicle = false;
                    this.setState(newState, () => this.props.createTask(this.state.task).then(() => this.props.history.push(path)));
                }else{
                    this.props.createTask(this.state.task).then(() => this.props.history.push(path));
                }
            }
        }else if(this.props.location.pathname.includes('/price')){
            if(!error['time'] && !error['date'] && !error['tasker_id']){
                this.props.updateTask(this.state.task).then(() => this.props.history.push(path));
            }
        }
    }

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
            const address = parser.parseAddress(this.state.task.location);
            // debugger;
            // const test = parser.parseAddress('542 Simas Drive, Milpitas, CA 95035');
            if(address){
                if(address.zip) {
                    newState.errors[type] = false;
                }else{
                    newState.errors[type] = 'Please enter valid address';
                }
            }else{
                newState.errors[type] = 'Please enter valid address';
            }
        }else{
            // debugger;
            if (this.state.task[type]){
                newState.errors[type] = false;
            }else{
                newState.errors[type] = 'Cannot be blank';
            }
        }
        // debugger;
        if(path){
            this.setState(newState, () => this.handleSubformSubmit(path,event));
        }else {
            this.setState(newState);
        }
    }

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
                    {...props} />
            )
        }
       
        // debugger;
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
            </div>
        )
    }
}

export default TaskForm;
