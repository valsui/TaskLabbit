import React from 'react';
import TaskButtonContainer from '../tasks/task_button_container';

class MainBodyComponent extends React.Component{

    render(){
        return (
            <div className='splash-body-container'>
                <div className='splash-body-top'>
                    <div className = 'splash-body-image-top'>
                    </div>
                    <span className='splash-body-button-top'>
                        <div>
                            Take a break, let a labbit take care of those littons
                        </div>
                        <TaskButtonContainer className = 'splash-body-button'/> 
                    </span>
                </div>
                <div className = 'splash-body-buttons-bottom'>
                    <div className='splash-body-bottom'>
                        <div className='splash-body-image-bottom-1'>
                        </div>
                        <div>
                            Mount a TV or mirror
                        </div>
                        <span className='splash-body-button-bottom'>
                            <TaskButtonContainer className='splash-body-button' />
                        </span>                
                    </div>
                    <div className='splash-body-bottom'>
                        <div className='splash-body-image-bottom-2'>
                        </div>
                        <div>
                            Lift heavy items 
                        </div>
                        <span className='splash-body-button-bottom'>
                            <TaskButtonContainer className='splash-body-button' />
                        </span>                
                    </div>
                    <div className='splash-body-bottom'>
                        <div className='splash-body-image-bottom-3'>
                        </div>
                        <div>
                            Clean your space
                        </div>
                        <span className='splash-body-button-bottom'>
                            <TaskButtonContainer className='splash-body-button' />
                        </span>                
                    </div>
                </div>
            </div>
        )
    }
}

export default MainBodyComponent;
