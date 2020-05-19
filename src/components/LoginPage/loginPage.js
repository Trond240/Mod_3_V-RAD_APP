import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './loginPage.css';


class LoginPage extends Component {
    constructor() {
        super();
        this.state = {
            name: '',
            email: '',
            reason: '',
            error: ''
        }
    }

    handleChange = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }

    loginUser = (e) => {
        if (this.state.name === '' || this.state.email === ''|| this.state.reason === '') {
            e.preventDefault();
            this.setState({error: 'Please Fill In All Inputs'})
        } else {
            this.props.setUserInfo({
                name: this.state.name,
                email: this.state.email,
                reason: this.state.reason,
            });
            this.setState({
                name: '',
                email: '',
                reason: '',
                error: ''
            })
            }
    }

    render() {

        return (
        <section className='login-container'>
            <h1>Rad Rentals!</h1>
            <form>
                <input
                type='text'
                placeholder='name'
                value={this.state.name}
                name='name'
                onChange={e => this.handleChange(e)}
                />

                <input
                type='text'
                placeholder='email'
                value={this.state.email}
                name='email'
                onChange={e => this.handleChange(e)}
                />

                <div>  
                    <label htmlFor="reason-for-login">Reason for visit</label>
                </div>
                <select onChange={e => this.handleChange(e)} id='reason-for-login' name='reason' value={this.state.reason}>
                    <option  defaultValue>
                    -- select an option --
                    </option>
                    <option value="business">Business</option>
                    <option value="vacation">Vacation</option>
                    <option value="other">Other</option>
                </select>
                <Link to='/areas'>
                    <button type='submit' className="login-button" onClick={this.loginUser}>Login</button>
                </Link>
                {this.state.error &&
                <div>
                    <p>{this.state.error}</p>
                </div>
                }
            </form>
        </section>
        )
    }
}

export default LoginPage;