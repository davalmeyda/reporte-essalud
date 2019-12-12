import React, { Component } from 'react';
import './login.css';


import loginProvider from '../providers/login_provider';

class LoginPage extends Component {

    state = {

    }

    cambiar = (event) => {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    iniciarsesion = (event) => {
        event.preventDefault();
        loginProvider(this.state.pws, this.state.uname);        
    }

    render() {
        return (
            <div className="container2">
                <form onSubmit={this.iniciarsesion}>
                    <div className="container">
                        <label htmlFor="uname"><b>Username</b></label>
                        <input onChange={this.cambiar} type="text" placeholder="Enter Username" name="uname" required />
                        <label htmlFor="psw"><b>Password</b></label>
                        <input onChange={this.cambiar} type="password" placeholder="Enter Password" name="psw" required />
                        <button onClick={this.iniciarsesion} type="submit">Login</button>
                    </div>
                </form>
            </div>
        );
    }
}
export default LoginPage;