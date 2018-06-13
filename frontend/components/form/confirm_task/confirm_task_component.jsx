import React from 'react';
import { Link } from 'react-router-dom';

// currentState = { this.state }
// handleChange = { this.handleChange }
// removeFormErrors = { this.props.removeFormError }
// handleSubmit = { this.handleSubmit }
// renderSubError = { this.renderSubError }
// taskers = {this.props.taskers}

class ConfirmTaskForm extends React.Component {
    constructor(props){
        super(props);

        this.tasker = this.tasker.bind(this);
    }
    
    tasker(id){
        let tasker;
        this.props.taskers.forEach((t) => {
            if(t.id===id){
                tasker = t.tasker_per_hour;
            }
        })
        return tasker;
    }
    
    render(){
        const task = this.props.currentState.task;
        if(!task.tasker_id){
            return <div>i have nothing!!!</div>
        }
        const tasker = this.tasker(task.tasker_id);

        <div className = 'confirm-task-container'>
            <div className = 'confirm-task-form'>
                <div className = 'title'>
                    <div className = 'type'>{task.task_type}</div>
                    <div className = 'price'>{tasker.price_per_hour}</div>
                </div>
                <div className = 'details'>
                    <div className = 'time-date-tasker'>
                        <div className='date-time'>
                            <div className='mini'>Date & Time</div>
                            <div className = 'date'>{task.date}</div>
                            <div className = 'time'>{task.time}</div>
                        </div>
                        <div className='tasker'>
                            <img src={tasker.image_url} />
                            <div className='name'>
                                <div>Tasker</div>
                                {`${tasker.first_name} ${tasker.last_name}`}
                            </div>
                        </div>
                    </div>
                    <div className='location'>
                        <div className='mini'>Task Location</div>
                        <div>{task.location}</div>
                    </div>
                    <div className='vehicle'>
                        <div className='mini'>Vehicle Requirements</div>
                        <div>{task.need_vehicle}</div>
                    </div>
                    <div className='description'>
                        <div className='mini'>Task Description</div>
                        <div>{task.description}</div>
                    </div>
                    <div className='edit'>
                        <Link to='/tasks/new'>Edit</Link>
                    </div>
                    <button className='bottom-button' onClick = {(e) => this.props.handleSubmit(e)}>Confirm & Book</button>
                    <div className='bottom'>You are charged only after your task is completed.</div>
                </div>
            </div>
        </div>
    }
}

export default ConfirmTaskForm;