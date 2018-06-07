import React from 'react';
import { Link, withRouter } from 'react-router-dom';

//issues: errors rendered from login or signup will persist in the global state and get rendered when navigating directly - how to fix?
//does refresh clear the global state?

class SignupForm extends React.Component {
    constructor(props){
        super(props);
        this.state = this.props.fill;
    }

    componentDidMount() {
        this.props.removeErrors();
    }
    
    update(field){
        return e => {
            if(typeof(e.currentTarget.value) === 'number'){
                return this.setState({
                    [field]: parseInt(e.currentTarget.value)
                })
            }else{
                return this.setState({
                [field]: e.currentTarget.value});
            }
        }
    }

    handleSubmit(e){
        e.preventDefault();
        this.props.action(this.state);
    };

    renderErrors() {
        if(this.props.errors){
             return (   
                <ul className = 'session-errors'>
                    {this.props.errors.map((error, i) => (
                        <li key={`error-${i}`}>
                            {error}
                        </li>
                    ))}
                </ul>
             )
        }
    };

    render(){

        return (
            <div className='login-splash'>
                <form className ='session-form-signup' onSubmit={(e) => this.handleSubmit(e)}>
                    <div className='session-input'>
                        <div className='logo'> </div>
                    </div>
                    <div className = 'session-input'>
                        <label>
                            <span className='session-title'>First Name</span>
                            <input className = 'session-text-box' type='text' value={this.state.first_name} onChange={this.update('first_name')} />
                        </label>
                    </div>
                    <div className='session-input'>
                        <label>
                            <span className='session-title'> Last Name</span>   
                            <input className='session-text-box' type='text' value={this.state.last_name} onChange={this.update('last_name')} />
                        </label>
                    </div>
                    <div className='session-input'>
                        <label>
                            <span className='session-title'> Email</span>   
                            <input className='session-text-box' type='text' value={this.state.email} onChange={this.update('email')} />
                        </label>
                    </div>
                    <div className='session-input'>
                        <label>
                            <span className='session-title'> Password</span>   
                            <input className='session-text-box' type='password' value={this.state.password} onChange={this.update('password')} />
                        </label>
                    </div>
                    <div className='session-input'>
                        <label>
                            <span className='session-title'> Zipcode</span>
                            <input className='session-text-box' type='text' value={this.state.zipcode} onChange={this.update('zipcode')} />
                        </label>
                    </div>
                    {this.renderErrors()}
                    <div className='session-input'>
                        <input className='session-button' type = 'submit' value='Create Account'/>
                    </div>
                    <span >
                        <Link className='other-session-link' to='/login'>Login</Link>
                    </span> 
                </form>
            </div>
        )

    }
}


export default withRouter(SignupForm);