import React from 'react';
import GreetingContainer from '../greeting/greeting_container';
import TaskTimeline from './banner/task_timeline_component';
import TrustSafetyBanner from './banner/trust_safety_component';
import TaskDetailsForm from './details/task_details_main_component';
import { Route } from 'react-router-dom';
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
                type: this.props.taskType,
                need_vehicle: false,
                location: '',
                duration: '',
                details: '',
                tasker_id: null,
                time: "I'm flexible",
                date: ''
            },
            taskId: null
        }
        
        this.handleChange = this.handleChange.bind(this);
        this.handleSubformSubmit = this.handleSubformSubmit.bind(this);
        this.handleSubmit = this.handleSubformSubmit.bind(this);
        // debugger;
    }

    componentWillReceiveProps(newProps){
        // fetch task - how to get id???
    }

    handleChange(type, e){
         this.setState({task: {[type]: e.currentTarget.value}});
         // need to update the state but how?
         console.log(this, type, e, this.state);
    }

    handleSubmit(e){
        e.preventDefault;
        //dispatch create Task;
    }

    handleSubformSubmit(path, e) {
        e.preventDefault();
        if(path.includes('/new')){
            this.props.createTask(this.state)
        }else{
            this.props.updateTask()
        }
        this.props.history.push(path);
    }

    render(){
        const TaskDetails = (props) => {
            return (
                <TaskDetailsForm currentState={this.state} 
                                handleChange={this.handleChange} 
                                handleSubmit={this.handleSubmit}
                                handleSubformSubmit={this.handleSubformSubmit}
                                {...props}/>
            ) 
        }     
       
        return (
            <div>
                <GreetingContainer/>
                <TaskTimeline/>
                <TrustSafetyBanner/>
                <Route exact path = '/task/new' render= {TaskDetails} />
            </div>
        )
    }
}

export default TaskForm;
