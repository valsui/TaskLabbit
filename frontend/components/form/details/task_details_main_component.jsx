import React from 'react';
import TaskDetailsText from './task_details_text_component';
import TaskLocation from './task_location_component';
import TaskDuration from './task_duration_component';
import TaskVehicle from './task_vehicle_component';


class TaskDetailsForm extends React.Component{
    constructor(props){
        super(props)
    }

    componentDidMount(){
        if(this.props.currentState.task.task_type){
            this.props.removeFormErrors();
        }
        // if(sessionStorage.getItem('id')){
        //     this.props.fetchTask(sessionStorage.getItem('id'));
        // }
    }

    render(){
        return(
            <div className = 'task-details-form'>
                <div className='details-title'>
                    Describe Your Task
                </div>
                <div className = 'details-subtitle'>
                    We need these inputs to show only qualified and available Taskers for the job. 
                </div>
                <TaskLocation location = {this.props.currentTask.location}
                errors = {this.props.currentState.errors.location} 
                handleChange = {this.props.handleChange} 
                handleSubmit = {this.props.handleSubmit} 
                handleErrorSubmit = {this.props.handleErrorSubmit}
                renderSubError = {this.props.renderSubError}/>
                <TaskDuration duration={this.props.currentTask.duration} 
                errors = {this.props.currentState.errors.duration}
                handleChange={this.props.handleChange} 
                handleSubmit={this.props.handleSubmit} 
                handleErrorSubmit = {this.props.handleErrorSubmit}
                renderSubError = {this.props.renderSubError}/>
                <TaskVehicle need_vehicle={this.props.currentTask.need_vehicle} 
                errors = {this.props.currentState.errors.need_vehicle}
                handleChange={this.props.handleChange} 
                handleSubmit={this.props.handleSubmit} 
                handleErrorSubmit = {this.props.handleErrorSubmit}
                renderSubError = {this.props.renderSubError} />
                <TaskDetailsText details={this.props.currentTask.description} 
                errors = {this.props.currentState.errors.description}
                handleChange={this.props.handleChange} 
                handleSubmit={this.props.handleSubmit} 
                handleErrorSubmit = {this.props.handleErrorSubmit}
                renderSubError = {this.props.renderSubError}
                />
            </div >
        )

    }
    

}

export default TaskDetailsForm;