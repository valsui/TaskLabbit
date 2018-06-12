import React from 'react';
import GreetingContainer from '../greeting/greeting_container';
import TaskTimeline from './banner/task_timeline_component';
import TrustSafetyBanner from './banner/trust_safety_component';
import TaskDetailsForm from './details/task_details_main_component';
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
                task_type: this.props.taskType,
                need_vehicle: false,
                location: '',
                duration: '',
                description: '',
                tasker_id: null,
                time: "I'm flexible",
                date: '',
            },
            // taskId: this.props.tasks.task.id,
            errors: {
                // need_vehicle: 'Field Cannot be blank',
                // location: 'Please enter valid address',
                // duration: 'Field Cannot be blank',
                // description: 'Field Cannot be blank',
                // time: false,
                // date: 'Field Cannot be blank',
                // tasker_id: 'Field Cannot be blank'
                need_vehicle: " ",
                location: " ",
                duration: " ",
                description: " ",
                time: " ",
                date: " ",
                tasker_id: " "
            },
            // currentTask: this.props.tasks.task
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
        // fetch task - how to get id???
    }

    handleChange(type, e){
        let newState = merge({}, this.state)
        newState.task[type] = e.currentTarget.value;
        this.setState(newState);
        // console.log(this.props, type, e, this.state);
    }

    handleSubmit(e){
        e.preventDefault;
        //dispatch update Task;
    }

    handleSubformSubmit(path, e) {
        // e.preventDefault();
        e.stopPropagation();
        const error = this.state.errors;
        if(this.props.location.pathname.includes('/new')){
            if(!error['location'] && !error['duration'] && !error['description'] && !error['need_vehicle']){
                // debugger;
                //handle vehicle 
                if (this.state.task.need_vehicle === 'Not needed for task'){
                    let newState = merge({}, this.state)
                    newState.task.need_vehicle = false;
                    this.setState(newState, () => this.props.createTask(this.state.task).then(() => this.props.history.push(path)));
                }else{
                    this.props.createTask(this.state.task).then(() => this.props.history.push(path));
                }
            }
        }else{
            if(!error[time] && !error[date] && !error[tasker_id]){
                // this.props.updateTask()
            }
        }
    }

    handleErrorSubmit(type, path, e){
        e.preventDefault();
        e.stopPropagation();
        let newState = merge({}, this.state)
        if(type === 'location'){
            const address = parser.parseAddress(this.state.task.location);
            // const test = parser.parseAddress('542 Simas Drive, Milpitas, CA 95035');
            if(address){
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
        // debugger;
        this.setState(newState, () => this.handleSubformSubmit(path,e));
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
                                handleSubmit={this.handleSubmit}
                                // handleSubformSubmit={this.handleSubformSubmit}
                                removeFormErrors = {this.props.removeFormError}
                                handleErrorSubmit = {this.handleErrorSubmit}
                                renderSubError = {this.renderSubError}
                                {...props}/>
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
                <Route exact path = '/task/new' render= {TaskDetails} />
                {/* <Route exact path = '/task/price' render {nfjknvda} />  */}
            </div>
        )
    }
}

export default TaskForm;
