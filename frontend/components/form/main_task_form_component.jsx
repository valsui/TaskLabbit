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
            user_id: currentUser ? currentUser.id : null,
            type: this.props.task,
            need_vehicle: false,
            location: '',
            duration: '',
            details: '',
            tasker: null,
            time: "I'm flexible",
            date: ''
        }
        
        this.handleChange = this.handleChange.bind(this);
        this.handleSubformSubmit = this.handleSubformSubmit.bind(this);
        this.handleSubmit = this.handleSubformSubmit.bind(this);
        // debugger;
    }

    handleChange(type, e){
         this.setState({[type]: e.currentTarget.value});
         console.log(this, type, e, this.state);
    }

    handleSubmit(e){
        e.preventDefault;
        //dispatch create Task;
    }

    handleSubformSubmit(path, e) {
        e.preventDefault();
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
