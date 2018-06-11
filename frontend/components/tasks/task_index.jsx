import React from 'react';
import TaskItem from './task_index_item';
import GreetingContainer from '../greeting/greeting_container';

class TaskIndex extends React.Component {
    // contructor(props){
    //     super(props);
    // }

    render(){
        return (
            <div className='task-index-splash'>
                {/* <GreetingContainer/> */}
                <ul></ul>
            </div>
        )
    }
}

export default TaskIndex;