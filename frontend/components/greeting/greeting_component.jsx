import React from 'react';
import { Link, Redirect } from 'react-router-dom';

const Greeting = ({ history, currentUser, logoutUser }) => {
    const sessionLinks = () => (
        <div className='navBar-big'>
            <div className='navBar-small'>
                <div className='navBar-logo'>
                    <img
                        src='https://i.imgur.com/ArkWnb9.png'
                        onClick={(e) => goBackTo('/', e)} />
                </div>
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
        logoutUser().then(() => history.push('/'));
    }

    const goBackTo = (path, e) => {
        e.preventDefault();
        history.push(path);
    }

    const personalGreeting = () => (
        <hgroup className="header-group">
            <div className='navBar'>
                <div className='navBar-small'>
                    <div className='navBar-logo'>
                        <img 
                            src='https://i.imgur.com/ArkWnb9.png'
                            onClick={(e) => goBackTo('/', e)} />
                    </div>

                    
                    <div className='header-login'>
                        {/* <div className='user-picture'> */}
                        <img onClick = {(e) => goBackTo('/dashboard', e)} src={currentUser.image_url} />
                        {/* </div> */}
                        <div className="header-name">Hi, {`${currentUser.first_name} ${currentUser.last_name}`}!
                        </div>
                        <button className="nav-button" onClick={(e) => handleClick(e)}>Log Out</button>
                        </div>
                    </div>
               
            </div>

        </hgroup>
    );

    return currentUser ? personalGreeting() : sessionLinks();
}

export default Greeting;