import React from 'react';
import MainBodyContainer from './splashbody_main_container';
import TaskButtonContainer from '../tasks/task_button_container';
import GreetingContainer from '../greeting/greeting_container';
import TaskSearchContainer from '../tasks/task_search_container';
import Footer from '../footer/footer_component';

class MainHeadComponent extends React.Component {


    componentDidMount() {
        this.props.removeTaskFromUI();
    }

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
                            Choose from over 60,000 carefully vetted and feedback rated Labbits to get quick help. 
                        </div>
                        <div className='main-subtitle-2'>
                            Begin by choosing or searching a task.
                        </div>
                        <div className='main-buttons-container'>
                            <TaskButtonContainer taskName = 'Mounting & Installation'/>
                            <TaskButtonContainer taskName = 'Moving & Packing'/>
                            <TaskButtonContainer taskName = 'Furniture Assembly'/>
                            <TaskButtonContainer taskName = 'Home Improvement'/>
                            <TaskButtonContainer taskName = 'General Handyman'/>
                            <TaskButtonContainer taskName = 'Heavy Lifting'/>
                        </div>
                            <TaskSearchContainer/>
                    </div>

                    <div className='main-between-text'>
                        Get Inspired
                    </div>

                    <div className='splash-body-container'>
                        <MainBodyContainer />
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}

export default MainHeadComponent;