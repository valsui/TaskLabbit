import React from 'react';

const TaskDetailsText = (props) => {
    return (
        <div className='task-details-subform'>        
            <form className = 'task-details-text-form'>
                <div>TELL US THE DETAILS </div>
                <div> Start the conversation and tell your Tasker what you need done. This helps us match you with the best ones for the job. Don't worry, you can edit this later. </div>
                <textarea className = 'task-details-text-input' 
                        type="text" 
                        placeholder= 'EXAMPLE: I rented a moving van, but need help moving my stuff in and out of it. I have: queen bed with frame, medium couch, loveseat, entertainment center, large TV, armchair, 2 bookcases, dining room table with 4 chairs, desk and chair, and about 50 boxes.' 
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