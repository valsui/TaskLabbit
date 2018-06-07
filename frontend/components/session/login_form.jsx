import React from 'react';
import { Link, withRouter } from 'react-router-dom';

//{email: 'halpme@g.com', password: 'password'}

class LoginForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.props.fill;
    }

    componentDidMount() {
        this.props.removeErrors();
    }

    update(field) {
        return e => {
            this.setState({
                [field]: e.currentTarget.value
            });
        }
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.action(this.state);
    };

    handleDemo(e) {
        e.preventDefault();
        this.setState({
            email: 'halpme@email.com',
            password: 'password'
        });
        setTimeout(() => { this.props.action(this.state)}, 1000);
    }

    renderErrors() {
        if (this.props.errors) {
            return (
                <ul className='session-errors'>
                    {this.props.errors.map((error, i) => (
                        <li key={`error-${i}`}>
                            {error}
                        </li>
                    ))}
                </ul>
            )
        }
    };

    render() {
        
        return (
            <div className = 'login-splash'>
                <form className='session-form-login' onSubmit={(e) => this.handleSubmit(e)}>
                    <div className='session-input'>
                        <div className='logo'> </div>
                    </div>
                    <div className='session-input'>
                        <label>
                            <span className='session-title'> Email:</span>
                            <input className='session-text-box' type='text' value={this.state.email} onChange={this.update('email')} />
                        </label>
                    </div>
                    <div className='session-input'>
                        <label>
                            <span className='session-title'> Password:</span>
                            <input className='session-text-box' type='password' value={this.state.password} onChange={this.update('password')} />
                        </label>
                    </div>
                    {this.renderErrors()}
                    <div className='session-input'>
                        <input className='session-button' type='submit' value='Login' />
                    </div>
                    <p className = 'session-or'>OR</p>
                    <div className='session-input'>
                        <input className='session-button' type='submit' value='Demo Login' onClick = {(e) => this.handleDemo(e)}/>
                    </div>
                    <div className='other-link-div'>
                        <span >
                            <Link className='other-session-link' to='/signup'>Sign Up</Link>
                        </span> 
                    </div>
                </form>
            </div>
        )

    }
}


export default withRouter(LoginForm);