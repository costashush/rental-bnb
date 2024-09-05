import React, { Component } from "react";
import { Redirect } from "react-router";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import AppBar from "material-ui/AppBar";
import RaisedButton from "material-ui/RaisedButton";
import TextField from "material-ui/TextField";
import axios from "axios";

// import styles from "./SignUp.css";
// import Login from "../Login/Login";

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      imageUrl: " ",
      name: {
        first: "",
        last: "",
      },
      redirect: false,
    };
  }

  handleClick(event) {
    var apiBaseUrl = "http://localhost:9000/api/users";

    // TBD: check for empty values before hitting submit
    var payload = {
      email: this.state.email,
      password: this.state.password,
      imageUrl: this.state.imageUrl,
      name: {
        first: this.state.name.first,
        last: this.state.name.last,
      },
    };
    axios
      .post(apiBaseUrl + "/signup", payload)
      .then((response) => {
        console.log(response);
        if (response.status === 200) {
          localStorage.setItem("token", response.data.token);
          localStorage.setItem("name", response.data.name);

          setTimeout(() => {
            this.setState({ redirect: true });
          }, 500);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    const { redirect } = this.state;

    if (redirect) {
      return <Redirect to="/" />;
    }

    return (
      <div className="container">
        <MuiThemeProvider>
          <div>
            <AppBar
              title="Signup"
              showMenuIconButton={false}
              style={{ backgroundColor: "#333333" }}
            />
            <TextField
              className={style.text_field}
              hintText="Enter Your First Name"
              floatingLabelText="First Name"
              fullWidth={true}
              onChange={(event, newValue) => {
                let name = this.state.name;
                name.first = newValue;
                this.setState({ name });
              }}
            />
            <br />
            <TextField
              hintText="Enter Your Last Name"
              fullWidth={true}
              floatingLabelText="Last Name"
              onChange={(event, newValue) => {
                let name = this.state.name;
                name.last = newValue;
                this.setState({ name });
              }}
            />
            <br />
            <TextField
              hintText="Enter Your Email"
              type="email"
              floatingLabelText="Email"
              fullWidth={true}
              onChange={(event, newValue) => this.setState({ email: newValue })}
            />
            <br />
            <TextField
              type="password"
              hintText="Enter your Password"
              floatingLabelText="Password"
              fullWidth={true}
              onChange={(event, newValue) =>
                this.setState({ password: newValue })
              }
            />
            <br />
            <RaisedButton
              label="Submit"
              style={style}
              onClick={(event) => this.handleClick(event)}
            />
          </div>
        </MuiThemeProvider>
      </div>
    );
  }
}
const style = {
  marginTop: 20,
};

export default Signup;
