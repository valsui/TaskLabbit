import React from 'react';
import { Link, Redirect } from 'react-router-dom';

const Greeting = ({ currentUser, logoutUser }) => {
    // debugger
    const sessionLinks = () => (
        <div className='navBar'>
            <nav className="login-signup">
                <div className = 'navBar-logo'></div>
                <div className = 'navBar-buttons'>
                    <div className='nav-button'>
                        <Link to="/login">Login</Link>
                    </div>
                    &nbsp;or&nbsp;
                    <div className='nav-button'>
                        <Link to="/signup">Sign up!</Link>
                    </div>
                </div>
            </nav>
        </div>
    );
    
    const handleClick = (e) => {
        e.preventDefault();
        logoutUser();
    }

    const personalGreeting = () => (
        <hgroup className="header-group">
            <h2 className="header-name">Hi, {`${currentUser.first_name} ${currentUser.last_name}`}!</h2>
            <div className='navBar'>
                <div className='navBar-logo'></div>
                <button className="header-logout-button" onClick={(e) => handleClick(e)}>Log Out</button>
            </div>
        </hgroup>
    );

    return currentUser ? personalGreeting() : sessionLinks();
}

export default Greeting;