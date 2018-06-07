import React from 'react';
import TaskButtonContainer from '../tasks/task_button_container';

class MainBodyComponent extends React.Component{

    render(){
        return (
            <div className='splash-body-container'>
                <span className = 'splash-body-image-top'>
                </span>
                <span className='splash-body-button-top'>
                    <TaskButtonContainer className = 'splash-body-button'/> 
                </span>
                <div className = 'splash-body-buttons-bottom'>
                    <span className='splash-body-image-bottom'>
                    </span>
                    <span className='splash-body-button-bottom'>
                        <TaskButtonContainer className='splash-body-button' />
                    </span>                
                    <span className='splash-body-image-bottom'>
                    </span>
                    <span className='splash-body-button-bottom'>
                        <TaskButtonContainer className='splash-body-button' />
                    </span>                
                    <span className='splash-body-image-bottom'>
                    </span>
                    <span className='splash-body-button-bottom'>
                        <TaskButtonContainer className='splash-body-button' />
                    </span>
                </div>
            </div>
        )
    }
}

export default MainBodyComponent;
