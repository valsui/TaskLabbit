import React from 'react';
import TaskDetailsText from './task_details_text_component';
import TaskLocation from './task_location_component';
import TaskDuration from './task_duration_component';
import TaskVehicle from './task_vehicle_component';


class TaskDetailsForm extends React.Component{
    constructor(props){
        super(props)
        // debugger;
    }

    componentDidMount(){
        if(this.props.currentState.task.task_type){
            this.props.removeFormErrors();
        }
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
                <TaskLocation location = {this.props.currentState.task.location}
                errors = {this.props.currentState.errors.location} 
                handleChange = {this.props.handleChange} 
                handleSubmit = {this.props.handleSubmit} 
                handleErrorSubmit = {this.props.handleErrorSubmit}
                renderSubError = {this.props.renderSubError}/>
                <TaskDuration duration={this.props.currentState.task.duration} 
                errors = {this.props.currentState.errors.duration}
                handleChange={this.props.handleChange} 
                handleSubmit={this.props.handleSubmit} 
                handleErrorSubmit = {this.props.handleErrorSubmit}
                renderSubError = {this.props.renderSubError}/>
                <TaskVehicle need_vehicle={this.props.currentState.task.need_vehicle} 
                errors = {this.props.currentState.errors.need_vehicle}
                handleChange={this.props.handleChange} 
                handleSubmit={this.props.handleSubmit} 
                handleErrorSubmit = {this.props.handleErrorSubmit}
                renderSubError = {this.props.renderSubError} />
                <TaskDetailsText details={this.props.currentState.task.description} 
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