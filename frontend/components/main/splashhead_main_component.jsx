import React from 'react';
import MainBodyContainer from './splashbody_main_container';
import TaskButtonContainer from '../tasks/task_button_container';
import GreetingContainer from '../greeting/greeting_container';

class MainHeadComponent extends React.Component {

    render() {
        return (
            <div>
                <GreetingContainer />
                <div className = 'splash-main'>
                    <div className='splash-head-container'>
                        <div className='main-title'>
                            The Convenient & fast way
                                <br />
                            to get things done around the house
                        </div>
                        <div className='main-subtitle'>
                            Choose from over 60,000 carefully vetted and feedback rated Labbits to get quick help
                        </div>
                        <div className='main-buttons-container'>
                            <TaskButtonContainer />
                            <TaskButtonContainer />
                            <TaskButtonContainer />
                            <TaskButtonContainer />
                            <TaskButtonContainer />
                            <TaskButtonContainer />
                        </div>
                        <div className='main-search-container'>
                            <input className='search' type='text' placeholder='Search Task'/>
                        </div>
                    </div>

                    <div className='main-between-text'>
                        Get Inspired
                    </div>

                    <div className='splash-body-container'>
                        <MainBodyContainer />
                    </div>
                </div>
            </div>
        )
    }
}

export default MainHeadComponent;