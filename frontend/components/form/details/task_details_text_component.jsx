import React from 'react';

const TaskDetailsText = (props) => {
    return (
        <div className='task-details-text-container'>
            <form className = 'task-details-text-form'>
                <div> Fill Out Details </div>
                <input className = 'task-details-text-input' type="text" placeholder = 'Tell Us More'/>
                <button className = 'task-details-text-button'>Continue</button>
            </form>
        </div>
    )
}

export default TaskDetailsText;