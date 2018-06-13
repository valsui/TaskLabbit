import React from 'react';

class TaskButtonComponent extends React.Component {
    constructor(props){
        super(props)
        
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e){
        e.preventDefault();
        this.props.addTasktoUI(this.props.taskName);
        window.sessionStorage.clear();
        window.sessionStorage.setItem('taskType', this.props.taskName);
        // debugger;
        this.props.history.push('/task/new');
    } 

    render() {
        let buttonText = '';
        let name = 'task-button';
        if(this.props.class){
            name = this.props.class;
        }

        if(this.props.buttonText){
            buttonText = this.props.buttonText;
        }else{
            buttonText = this.props.taskName;
        }

        return (
            <span className='task-button-container'>
                <button className={name} onClick = {this.handleClick}>{buttonText}</button>
            </span>
        )
    }
}

export default TaskButtonComponent;