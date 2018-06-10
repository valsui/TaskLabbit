import React from 'react';

const TaskDuration = (props) => {
    return (
        <div className='task-details-subform'>
            <div className = 'task-duration-container'>
                <strong> How big is your task? </strong>
                <div className = 'task-duration-radio-buttons'>
                    <div className = 'duration-radio-container-1'>
                        <input type="radio" 
                                className='duration-radio-button'
                                value = 'Small - Est. 1 hr'
                                checked = {props.duration === 'Small - Est. 1 hr'}
                                onChange = {(e) => props.handleChange('duration', e)}/>
                        <label className='duration-radio-button-label'>Small - Est. 1 hr</label>
                    </div>
                    <div className = 'duration-radio-container-2'>
                        <input type="radio" 
                                className='duration-radio-button'
                                value='Medium - Est. 2-3 hrs'
                                checked={props.duration === 'Medium - Est. 2-3 hrs'}
                                onChange={(e) => props.handleChange('duration', e)} />
                        <label className='duration-radio-button-label'>Medium - Est. 2-3 hrs</label>
                    </div>
                    <div className = 'duration-radio-container-3'>
                        <input type="radio" 
                                className = 'duration-radio-button'
                                value ='Large - Est. 2-3 hrs'
                                checked={props.duration === 'Large - Est. 2-3 hrs'}
                                onChange={(e) => props.handleChange('duration', e)} />
                        <label className='duration-radio-button-label'>Large - Est. 2-3 hrs</label>
                    </div>
                </div>
                <div className='button-container'>
                    <button className='continue-button' type="submit">Continue</button>
                </div>
            </div>
        </div>
    )
}

export default TaskDuration;