import React from 'react';

const TaskLocation = (props) => {
    return (
        <div className='task-location-text-container'>
            <form className='task-location-text-form'>
                <div> Fill Out location </div>
                <input className='task-location-text-input' type="text" placeholder='Tell Us More' />
                <button className='task-location-text-button'>Continue</button>
            </form>
        </div>
    )
}

export default TaskLocation;