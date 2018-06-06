import React from 'react';
import { Link, withRouter } from 'react-router-dom';

//{email: 'halpme@g.com', password: 'password'}

class LoginForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.props.fill;
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
            email: 'halpme@g.com',
            password: 'password'
        });
        setTimeout(() => { this.props.action(this.state)}, 1000);
    }

    renderErrors() {
        if (this.props.errors) {
            return (
                <ul>
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
            <form onSubmit={(e) => this.handleSubmit(e)}>
                {this.renderErrors()}
                <div>
                    <label>
                        Email:
                        <input type='text' value={this.state.email} onChange={this.update('email')} />
                    </label>
                </div>
                <div>
                    <label>
                        Password:
                        <input type='password' value={this.state.password} onChange={this.update('password')} />
                    </label>
                </div>
                <input className='loginform-button' type='submit' value={this.props.formType} />
                <input className='logindemo-button' type='submit' value='Demo Login' onClick = {(e) => this.handleDemo(e)}/>
            </form>
        )

    }
}


export default withRouter(LoginForm);