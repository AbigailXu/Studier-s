import React from "react";
import Joi from "joi-browser";
import { Fragment } from "react";
import Form from "../components/form";
import "../styles/forms.css";

class Login extends Form {
  state = {
    data: { username: "", password: "" },
    errors: {},
  };

  schema = {
    username: Joi.string().required(),
    password: Joi.string().required(),
  };

  doSubmit = () => {
    // call server
    alert("Login successful!");
  };

  render() {
    return (
      <Fragment>
        <form onSubmit={this.handleSubmit} className="form">
          <h1>Login</h1>
          {this.renderInput("username", "Username", "", true)}
          {this.renderInput("password", "Password")}
          {this.renderSubmitBtn("Login")}
        </form>
      </Fragment>
      //renderInput(name, lable, placeholder, isAutoFocus=false, type="text")
    );
  }
}

export default Login;
