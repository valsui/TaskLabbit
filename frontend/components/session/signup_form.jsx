import React from 'react';
import { Link, withRouter } from 'react-router-dom';

//issues: errors rendered from login or signup will persist in the global state and get rendered when navigating directly - how to fix?
//does refresh clear the global state?

class SignupForm extends React.Component {
    constructor(props){
        super(props);
        this.state = this.props.fill;
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

    render(){

        return (
            <form onSubmit={(e) => this.handleSubmit(e)}>
                {this.renderErrors()}
                <div>
                    <label>
                        First Name:
                        <input type='text' value={this.state.first_name} onChange={this.update('first_name')} />
                    </label>
                </div>
                <div>
                    <label>
                        Last Name:
                        <input type='text' value={this.state.last_name} onChange={this.update('last_name')} />
                    </label>
                </div>
                <div>
                    <label>
                        Zipcode:
                        <input type='text' value={this.state.zipcode} onChange={this.update('zipcode')} />
                    </label>
                </div>
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
                <input type = 'submit' value={this.props.formType}/>
            </form>
        )

    }
}


export default withRouter(SignupForm);