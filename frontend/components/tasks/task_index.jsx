import React from 'react';
import TaskItem from './task_index_item';

class TaskIndex extends React.Component {
    constructor(props){
        super(props);

        this.deleteTask = this.deleteTask.bind(this);
        this.render = this.render.bind(this);
    }

    deleteTask(id){
        this.props.deleteTask(id).then(this.render());
    }

    componentDidMount() {
        this.props.fetchTasks(this.props.currentUser.id);
    }

    render(){
        const ownTasks = this.props.ownTasks;

        if(ownTasks.length === 0){
            return <div className='no-tasks'>You currently have no tasks.</div>
        }

        return (
            <div className='user-task-index-container'>
                <div>Your created tasks</div>
                <ul className = 'user-task-list'>
                    {ownTasks.map((task) => {
                        return <TaskItem key={task.id} deleteTask ={this.deleteTask} task ={task}/>
                    })}
                </ul>
            </div>
        )
    }
}

export default TaskIndex;