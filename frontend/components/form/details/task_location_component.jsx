import React from 'react';

const TaskLocation = (props) => {
    return (
        <div className='task-details-subform'>
            <form className='task-location-text-form'>
                <div> YOUR TASK LOCATION </div>
                <input className='task-location-text-input' type="text" placeholder='Enter street address' onChange = {(e) => props.handleChange('location', e)}/>
                <div className='button-container'>
                    <button className='continue-button'>Continue</button>
                </div>
            </form>
        </div>
    )
}

export default TaskLocation;