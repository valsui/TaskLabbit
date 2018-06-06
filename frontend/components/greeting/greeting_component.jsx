import React from 'react';
import { Link, Redirect } from 'react-router-dom';

const Greeting = ({ currentUser, logoutUser }) => {
    // debugger
    const sessionLinks = () => (
        <nav className="login-signup">
            <Link to="/login">Login</Link>
            &nbsp;or&nbsp;
      <Link to="/signup">Sign up!</Link>
        </nav>
    );
    
    const handleClick = (e) => {
        e.preventDefault();
        // debugger;
        logoutUser().then(() => <Redirect to='/'/> ); //why not working???
    }

    const personalGreeting = () => (
        <hgroup className="header-group">
            <h2 className="header-name">Hi, {`${currentUser.first_name} ${currentUser.last_name}`}!</h2>
            <button className="header-button" onClick={(e) => handleClick(e)}>Log Out</button>
        </hgroup>
    );

    return currentUser ? personalGreeting() : sessionLinks();
}

export default Greeting;