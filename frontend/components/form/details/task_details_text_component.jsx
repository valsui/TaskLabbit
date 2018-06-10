import React from 'react';

const TaskDetailsText = (props) => {
    return (
        <div className='task-details-subform'>        
            <form className = 'task-details-text-form'>
                <div>TELL US THE DETAILS </div>
                <div> Start the conversation and tell your Tasker what you need done. This helps us match you with the best ones for the job. Don't worry, you can edit this later. </div>
                <textarea className = 'task-details-text-input' 
                        type="text" 
                        placeholder = 'Tell Us More' 
                        onChange = {(e) => props.handleChange('details',e)}/>

                <div>If you need two or more Taskers, please post additional tasks for each Tasker needed. </div>
                <div className = 'button-container'>
                    <button className = 'continue-button' 
                            onClick = {(e) => props.handleSubformSubmit('/task/price', e)}>
                            Continue
                    </button>
                </div>
            </form>
        </div>
    )
}

export default TaskDetailsText;