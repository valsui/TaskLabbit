import React from 'react';
import { getDate } from '../../util/helpers';

class TaskItem extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        const task = this.props.task;
        const tasker = task.tasker;

        if (!tasker) {
            return <div>Something went wrong</div>
        }
        
        const vehicle = () => {
            if(task.need_vehicle){
                return <div className='vehicle'>
                <div className='title'>Location:</div>
                Task requires vehicle
                </div>
            }else{
                return <div className='vehicle'>
                <div className='title'>Location:</div>
                No vehicle required</div>
            }
        }

        return(
            <li className='task-item'>
                <div className = 'type-tasker'>
                    <div className='type'>{task.task_type}</div>
                    <div className='tasker'>
                        <img src={tasker.image_url}/>
                        <div className='name'>{tasker.first_name}</div>
                    </div>
                </div>
                    <div className='status'>{`Awesome! Your task has been booked with ${tasker.first_name} Labbit`}
                        <div className='price'>{`@ $${tasker.price_per_hour}/hr`}</div>
                        <div className='contact'>{` Contact ${tasker.first_name} at ${tasker.email}`} </div>
                    </div>
                    <div className='datetime'>
                        <div className='title'>Date and Time:</div>
                        <div className='date'>{getDate(task.date)}</div>
                        <div className='time'>{task.time}</div>
                    </div>
                    <div className='location-details'>
                        <div className='title'> Location:</div>
                        <div className='location'> {task.location}</div>
                        
                    </div>
                    <div className='description'>
                    <div className='title'>Description:</div>
                    {task.description}</div>
                    {vehicle()}
                    <div className='cancel'>
                        <button className='bottom-button' onClick ={() => this.props.deleteTask(task.id)}>Cancel Task</button>
                    </div>
                    

            </li>
        )
    }
}

export default TaskItem;

