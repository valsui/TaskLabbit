import React from 'react';
import TaskButtonContainer from '../tasks/task_button_container';

class MainBodyComponent extends React.Component{

    render(){
        return (
            <div className='splash-body-container'>
                <div className = 'splash-body-image'></div>
                <div className='splash-body-button-top'>
                    <TaskButtonContainer className = 'splash-body-button'/> 
                </div>
                <div className = 'splash-body-buttons-bottom'>
                    <TaskButtonContainer className='splash-body-button' /> 
                    <TaskButtonContainer className='splash-body-button' /> 
                    <TaskButtonContainer className='splash-body-button' /> 
                </div>
            </div>
        )
    }
}

export default MainBodyComponent;
