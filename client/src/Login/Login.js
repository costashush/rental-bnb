import React, { Component } from 'react';
import { Redirect } from 'react-router';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import axios from 'axios';
import styles from './Login.css';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            redirect: false,
            showWait: false,
            usernameErrorText: '',
            passwordErrorText: ''
        };
        this.handleClick = this.handleClick.bind(this);
    }

    async handleClick(event) {
        if (!this.state.username) {
            this.setState({ usernameErrorText: 'This field is required' });
        }

        if (!this.state.password) {
            this.setState({ passwordErrorText: 'This field is required' });
        }
        if (!this.state.password || !this.state.username) {
            return;
        }

        var apiBaseUrl = 'http://localhost:9000/api/users/';
        var payload = {
            email: this.state.username,
            password: this.state.password
        };
        axios
            .post(apiBaseUrl + 'login', payload)
            .then(response => {
                console.log(response)
                if (response.status == 200) {
                    localStorage.setItem('token', (response.data.token));
                    localStorage.setItem('name', (response.data.name));

                    setTimeout(() => {
                        this.setState({ redirect: true });
                    }, 500);
                    
                } else if (response.status == 201) {
                    alert('username password do not match');
                } else {
                    alert('Username does not exist');
                }
            })
            .catch(function(error) {
                alert('username password do not match');
                console.log(error);
            });
    }
    render() {
        const { redirect } = this.state;

        if (redirect) {
            return <Redirect to="/" />;
        }
        return (
            <div className='container'>
                <MuiThemeProvider>
                    <div>
                        <AppBar
                            title="Login"
                            showMenuIconButton={false}
                            style={{ backgroundColor: '#333333' }}
                        />
                        <TextField
                            hintText="Enter your Username"
                            floatingLabelText="Username"
                            fullWidth={true}
                            errorText={this.state.usernameErrorText}
                            onChange={(event, newValue) =>
                                this.setState({ username: newValue, usernameErrorText: '' })}
                        />
                        <br />
                        <TextField
                            type="password"
                            hintText="Enter your Password"
                            floatingLabelText="Password"
                            fullWidth={true}
                            errorText={this.state.passwordErrorText}
                            onChange={(event, newValue) =>
                                this.setState({ password: newValue, passwordErrorText: '' })}
                        />
                        <br />
                        <RaisedButton
                            label="Submit"
                            style={style}
                            onClick={event => this.handleClick(event)}
                        />
                    </div>
                </MuiThemeProvider>
            </div>
        );
    }
}

const style = {
    marginTop: 20
};

export default Login;
