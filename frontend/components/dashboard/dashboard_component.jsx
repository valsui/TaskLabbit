import React from 'react';
import TaskIndex from '../tasks/task_index_container';
import GreetingContainer from '../greeting/greeting_container';
import TaskSearchContainer from '../tasks/task_search_container';

//have the user get redirected to to confirmation page or whatever step they are on if there is a task in the local session 

class DashboardComponent extends React.Component{

    render(){
        return (
            <div className = 'dashboard'>
                <GreetingContainer/>
                <div className = 'search-stuff'>Begin a Task</div>
                <TaskSearchContainer/>
            </div>
        )

    }
    
}

export default DashboardComponent;