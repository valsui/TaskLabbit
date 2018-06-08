import React from 'react';
import TaskButtonContainer from '../tasks/task_button_container';

class MainBodyComponent extends React.Component{

    render(){
        return (
            <div className='splash-body-container'>
                <div className='splash-body-top'>
                    <div className ='splash-body-top-image'>
                    </div>
                    <div className='splash-body-button-top'>
                        <div>
                            Take a break, let a labbit take care of those littons
                        </div>
                        <TaskButtonContainer taskName='General Handyman' buttonText='Book Handyman' addClass='bottom-button'/>
                    </div>
                </div>
                <div className = 'splash-body-buttons-bottom'>
                    <div className='splash-body-bottom'>
                        <div className='splash-body-bottom-image-1'>
                        </div>
                        <div className = 'bottom-button-tb'>
                            <div className='above-text'>
                                Mount a TV or mirror
                            </div>
                            <span className='splash-body-button-bottom'>
                                <TaskButtonContainer taskName='Mounting & Installation' buttonText='Book Mounting' addClass= 'bottom-button' />
                            </span>                
                        </div>
                    </div>
                    <div className='splash-body-bottom'>
                        <div className='splash-body-bottom-image-2'>
                        </div>
                            <div className='bottom-button-tb'>
                            <div className='above-text'>
                                Lift heavy items 
                            </div>
                            <span className='splash-body-button-bottom'>
                                <TaskButtonContainer taskName='Furniture Assembly' buttonText='Book Assembly' addClass='bottom-button'/>
                            </span>  
                        </div>              
                    </div>
                    <div className='splash-body-bottom'>
                        <div className='splash-body-bottom-image-3'>
                        </div>
                            <div className='bottom-button-tb'>
                            <div className='above-text'>
                                Clean your space
                            </div>
                            <span className='splash-body-button-bottom'>
                                <TaskButtonContainer taskName='Moving & Packing' buttonText='Book Help Moving' addClass='bottom-button'/>
                            </span>   
                        </div>             
                    </div>
                </div>
            </div>
        )
    }
}

export default MainBodyComponent;
