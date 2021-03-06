import React from 'react';
import TaskerIndex from './tasker_index_component';
import DateTimeComponent from './task_datetime_component';

class PickTaskerForm extends React.Component{
    constructor(props){
        super(props);
    }

    componentDidMount(){
        const taskType = sessionStorage.getItem('taskType');
        this.props.fetchTaskers(taskType);
        this.props.fetchTask(sessionStorage.getItem('id'));
    }

    render(){
        return(
            <div className = 'pick-tasker-main-form'>
                <div className = 'title'>
                    <div className='details-title'>
                        Pick a Tasker
                    </div>
                    <div className='details-subtitle'>
                        After booking, you can chat with your Tasker, agree on an exact time, or go over any requirements or questions, if necessary.
                    </div>
                </div>
                <div className='time-tasker-container'>
                    <DateTimeComponent currentState={this.props.currentState}
                        errors={this.props.currentState.errors}
                        handleChange={this.props.handleChange}
                        removeFormErrors={this.props.removeFormErrors}
                        handleErrorSubmit={this.props.handleErrorSubmit}
                        renderSubError={this.props.renderSubError}
                                 />
                    <TaskerIndex currentState={this.props.state}
                                errors={this.props.currentState.errors.tasker_id}
                                handleChange={this.props.handleChange}
                                removeFormErrors={this.props.removeFormError}
                                handleErrorSubmit={this.props.handleErrorSubmit}
                                renderSubError={this.props.renderSubError}
                                taskers={this.props.taskers}
                                currentTask = {this.props.currentTask}
                                />
                </div>

            </div>
        )
    }
}

export default PickTaskerForm;