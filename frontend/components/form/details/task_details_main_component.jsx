import React from 'react';
import TaskDetailsText from './task_details_text_component';
import TaskLocation from './task_location_component';
import TaskDuration from './task_duration_component';
import TaskInterest from './task_interest_component';


const TaskDetailsForm = (props) => {
    return (
        <div>
            <TaskInterest/>
            <TaskLocation/>
            <TaskDuration/>
            <TaskDetailsText/>
        </div>
    )
}

export default TaskDetailsForm;