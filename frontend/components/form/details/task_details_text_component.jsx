import React from 'react';

const TaskDetailsText = (props) => {
    let completed = 'non-completed';
    if (!props.errors) {
        completed = 'completed';
    }
    return (
        <div className={`task-details-subform ${completed}`}>        
            <form className = 'task-details-text-form'>
                <div className = 'sub-form-title'>
                    <strong>TELL US THE DETAILS </strong>
                     {props.renderSubError('description')}
                    <i className={`far fa-check-circle ${completed}`}></i>
                </div>
                <div> Start the conversation and tell your Tasker what you need done. This helps us match you with the best ones for the job. Don't worry, you can edit this later. </div>
                <textarea className = 'task-details-text-input' 
                        value={props.description}
                        type="text" 
                        placeholder= 'EXAMPLE: I rented a moving van, but need help moving my stuff in and out of it. I have: queen bed with frame, medium couch, loveseat, entertainment center, large TV, armchair, 2 bookcases, dining room table with 4 chairs, desk and chair, and about 50 boxes.' 
                        onChange = {(e) => props.handleChange('description',e)}/>

                <div>If you need two or more Taskers, please post additional tasks for each Tasker needed. </div>
                <div className = 'button-container'>
                    <button className = 'continue-button' 
                            onClick = {(e) => {
                                props.handleErrorSubmit('description','/task/price',e)
                                // props.handleSubformSubmit('/task/price', e)
                                }}>
                            Save & Continue
                    </button>
                </div>
            </form>
        </div>
    )
}

export default TaskDetailsText;