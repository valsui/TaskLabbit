import React from 'react';
import TaskerIndexItem from './tasker_index_item_component';


class TaskerIndex extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        // debugger;

        return (
            <div className = 'task-index-container'>
                <ul className = 'taskers-list'>
                    {this.props.taskers.map((tasker) => {
                        return <TaskerIndexItem key={tasker.id}
                            info={tasker}
                            handleChange={this.props.handleChange}
                            errors = {this.props.errors} 
                            renderSubError={this.props.renderSubError}/>
                    })}
                </ul>
            </div>
        )
    }
}

export default TaskerIndex;