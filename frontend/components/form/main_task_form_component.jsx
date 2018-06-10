import React from 'react';
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
    }

    handleChange(type, e){
         this.setState({[type]: e.currentTarget.value});
         console.log(this, type, e, this.state);
    }

    handleSubmit(e){
        e.preventDefault;
        //dispatch create Task;
    }

    render(){
        const TaskDetails = (props) => {
            return (
                <TaskDetailsForm currentState={this.state} 
                                handleChange={this.handleChange} 
                                handleSubmit={this.handleSubmit} />
            ) 
        }     
       
        return (
            <Route exact path = '/task/new' render= {TaskDetails} />
        )
    }
}

export default TaskForm;
