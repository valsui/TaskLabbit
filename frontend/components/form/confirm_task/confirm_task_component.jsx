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



    componentDidMount(){
        this.props.fetchTask(sessionStorage.getItem('id'));
    }

    
    tasker(id){
        let tasker;
        this.props.taskers.forEach((t) => {
            if(t.id === id){
                tasker = t;
                
            }
        })
        return tasker;
    }
    
    render(){
        let task = this.props.currentTask;

        if(!task){
            return <div className='no-task'>
                <img src="https://farm5.static.flickr.com/4034/4542094724_36fdaca4e1_b.jpg" />
            </div>
        }

        const tasker = task.tasker;

        if(tasker === undefined){
            return <div className='no-task'>
                <img src="https://farm5.static.flickr.com/4034/4542094724_36fdaca4e1_b.jpg" />
            </div>
        }

        const vehicle = () => {
            if (task.need_vehicle) {
                return <div className='vehicle'>Task requires vehicle</div>
            } else {
                return <div className='vehicle'>No vehicle required</div>
            }
        }
        
        return (
            <div className = 'confirm-task-container'>
                <div className = 'header'>Confirm & Book</div>
                <div className='subheader'>Please confirm the details of your task.</div>
                <div className = 'confirm-task-form'>
                    <div className = 'title'>
                        <div className = 'type'>{task.task_type}</div>
                        <div className = 'price'>@ ${tasker.price_per_hour}/hr</div>
                    </div>
                    <div className = 'details'>
                        <div className = 'time-date-tasker'>
                            <div className='date-time'>
                                <div className='mini'>Date & Time: </div>
                                <div className = 'date'>{task.date}</div>
                                <div className = 'time'>{task.time}</div>
                            </div>
                            <div className='tasker'>
                                <div className='name'>
                                    <div>Tasker</div>
                                    {`${tasker.first_name} ${tasker.last_name}`}
                                </div>
                                <img src={tasker.image_url} />
                            </div>
                        </div>
                        <div className='location'>
                            <div className='mini'>Task Location: </div>
                            <div>{task.location}</div>
                        </div>
                        <div className='vehicle'>
                            <div className='mini'>Vehicle Requirements: </div>
                            <div>{vehicle()}</div>
                        </div>
                        <div className='description'>
                            <div className='mini'>Task Description: </div>
                            <p className='text'>{task.description}</p>
                        </div>
                        <div className='edit'>
                            <div className='link'>
                                <Link to='/task/new'>Edit</Link>
                                </div>
                            <button className='bottom-button' 
                            onClick = {(e) => this.props.handleSubmit(e)}>Confirm & Book</button>
                            <div className='bottom'>You are charged only after your task is completed.</div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ConfirmTaskForm;