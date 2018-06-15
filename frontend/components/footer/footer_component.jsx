import React from 'react';

class Footer extends React.Component{
    render(){
        return(
            <div className = 'footer-container'>
                <div className = 'footer'>
                    <div className='sm-links'>
                        <span className = 'text'>
                            Follow us! We're friendly: 
                        </span>
                        <div className = 'sm'>
                            <a href="https://github.com/valsui/TaskLabbit">
                                <i className="fab fa-github"></i>
                            </a>
                            <div className='bar'> | </div>
                            <a href="https://www.linkedin.com/in/valerie-sui/">
                                <i className="fab fa-linkedin-in"></i>
                            </a>
                            <div className='bar'> | </div>
                        </div>
                    </div>
                    <div className='labbits'>
                        <a href="https://www.kidrobot.com/pages/what-is-a-labbit">
                        Learn about labbits
                        </a>
                    </div>
                </div>
            </div>
        )
    }
}

export default Footer;