import React from 'react';
import { Link, Redirect } from 'react-router-dom';

const Greeting = ({ currentUser, logoutUser }) => {
    // debugger
    const sessionLinks = () => (
        <div className='navBar-big'>
            <div className='navBar-small'>
                <div className = 'navBar-logo'></div>
                <div className = 'navBar-buttons'>
                    <div className='nav-button'>
                        <Link className='nav-button-link' to="/login">Login</Link>
                    </div>
                    <div className='nav-button'>
                        <Link className='nav-button-link' to="/signup">Sign up</Link>
                    </div>
                </div>
            </div>
        </div>
    );
    
    const handleClick = (e) => {
        e.preventDefault();
        logoutUser();
    }

    const personalGreeting = () => (
        <hgroup className="header-group">
            <div className='navBar'>
                <div className='navBar-small'>
                    <div className='navBar-logo'></div>
                    <button className="nav-button" onClick={(e) => handleClick(e)}>Log Out</button>
                </div>
            </div>
            <div className='header-login'>
                <div className = 'user-picture'>
                    <img src="https://media.artoyz.net/shop/24449-large_default/14-wooly-stache-labbit.jpg"/>
                </div>
                <h2 className="header-name">Hi, {`${currentUser.first_name} ${currentUser.last_name}`}!</h2>
            </div>
        </hgroup>
    );

    return currentUser ? personalGreeting() : sessionLinks();
}

export default Greeting;