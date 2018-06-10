import React from 'react';

const TaskDuration = (props) => {
    return (
        <div className='task-duration-component-container'>
            <div className = 'duration-radio-container-1'>
                <input type="radio" 
                        className='duration-radio-button'
                        checked = {props.duration === 'Small - Est. 1 hr'}
                        onChange = {(e) => props.handleChange('duration', e)}/>
                <label className='duration-radio-button-label'>Small - Est. 1 hr</label>
            </div>
            <div className = 'duration-radio-container-2'>
                <input type="radio" 
                        className='duration-radio-button'
                        checked={props.duration === 'Medium - Est. 2-3 hrs'}
                        onChange={(e) => props.handleChange('duration', e)} />
                <label className='duration-radio-button-label'>Medium - Est. 2-3 hrs</label>
            </div>
            <div className = 'duration-radio-container-3'>
                <input type="radio" 
                        className='duration-radio-button'
                        checked={props.duration === 'Large - Est. 2-3 hrs'}
                        onChange={(e) => props.handleChange('duration', e)} />
                <label className='duration-radio-button-label'>Large - Est. 2-3 hrs</label>
            </div>
            <div className='duration-button-submit-container'>
                <button className='continue-button' type="submit">Continue</button>
            </div>
        </div>
    )
}

export default TaskDuration;