import React from 'react';

const TaskLocation = (props) => {
    return (
        <div className='task-location-text-container'>
            <form className='task-location-text-form'>
                <div> Fill Out location </div>
                <input className='task-location-text-input' type="text" placeholder='Tell Us More' onChange = {(e) => props.handleChange('location', e)}/>
                <button className='continue-button'>Continue</button>
            </form>
        </div>
    )
}

export default TaskLocation;