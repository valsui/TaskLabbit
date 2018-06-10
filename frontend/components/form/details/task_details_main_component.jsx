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

    render(){
        return(
            <div className = 'task-details-form'>
                <TaskLocation location = {this.props.currentState.location} handleChange = {this.props.handleChange} handleSubmit = {this.props.handleSubmit}/>
                <TaskDuration duration={this.props.currentState.duration} handleChange={this.props.handleChange} handleSubmit={this.props.handleSubmit}/>
                <TaskVehicle need_vehicle={this.props.currentState.need_vehicle} handleChange={this.props.handleChange} handleSubmit={this.props.handleSubmit} />
                <TaskDetailsText details={this.props.currentState.details} handleChange={this.props.handleChange} handleSubmit={this.props.handleSubmit} handleSubformSubmit={this.props.handleSubformSubmit}
                />
            </div >
        )

    }
    

}

export default TaskDetailsForm;