import React from 'react';
import TaskIndexContainer from '../tasks/task_index_container';
import GreetingContainer from '../greeting/greeting_container';
import TaskSearchContainer from '../tasks/task_search_container';
import { Redirect } from 'react-router-dom';

//have the user get redirected to to confirmation page or whatever step they are on if there is a task in the local session 

class DashboardComponent extends React.Component{
    constructor(props){
        super(props);
    }

    componentWillMount(){
        if(this.props.currentTask){
            this.props.history.push('/task/confirm');
        }
    }

    render(){
        return (
            <div className = 'dashboard'>
                <GreetingContainer/>
                <div className='header'>
                    <img src="https://thehobbyheaven.files.wordpress.com/2016/01/dscf71631.jpg?w=778"/>
                    <div className = 'greeting'>{`Welcome to Task Labbit, ${this.props.currentUser.first_name}!`}
                        <div>Let's begin a task below.</div>
                    </div>
                </div>
                <TaskSearchContainer/>
                <TaskIndexContainer/>
            </div>
        )

    }
    
}

export default DashboardComponent;