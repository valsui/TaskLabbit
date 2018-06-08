import React from 'react';

const TaskDuration = (props) => {
    return (
        <div className='task-duration-component-container'>
            <div className = 'duration-radio-container-1'>
                <input type="radio" id='duration-radio-button'/>
                <label className = 'duration-radio-button-label'>1 hour</label>
            </div>
            <div className = 'duration-radio-container-2'>
                <input type="radio" id='duration-radio-button'/>
                <label className = 'duration-radio-button-label'>5 hours</label>
            </div>
            <div className = 'duration-radio-container-3'>
                <input type="radio" id='duration-radio-button'/>
                <label className = 'duration-radio-button-label'>Forever</label>
            </div>
            <div className='duration-button-submit-container'>
                <button className='duration-button' type="submit">Continue</button>
            </div>
        </div>
    )
}

export default TaskDuration;