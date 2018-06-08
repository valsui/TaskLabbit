import React from 'react';

const TaskInterest = (props) => {
    return (
        <div className='task-interest-component-container'>
            <div className='interest-radio-container-1'>
                <input type="radio" id='interest-radio-button' />
                <label className='interest-radio-button-label'>I'm ready to book now</label>
            </div>
            <div className='interest-radio-container-2'>
                <input type="radio" id='interest-radio-button' />
                <label className='interest-radio-button-label'>i am interested in booking sometime soon</label>
            </div>
            <div className='interest-radio-container-3'>
                <input type="radio" id='interest-radio-button' />
                <label className='interest-radio-button-label'>I am just browsing</label>
            </div>
            <div className= 'interest-button-submit-container'>
                <button className= 'interest-button' type="submit">Continue</button>
            </div>
        </div>
    )
}

export default TaskInterest;