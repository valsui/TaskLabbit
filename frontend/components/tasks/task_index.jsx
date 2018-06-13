import React from 'react';
import TaskItem from './task_index_item';
// import GreetingContainer from '../greeting/greeting_container';

class TaskIndex extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        return (
            <div className='task-index-splash'>
                <ul></ul>
            </div>
        )
    }
}

export default TaskIndex;