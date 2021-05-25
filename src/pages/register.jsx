import React, { Fragment } from "react";
import Joi from "joi-browser";
import Form from "../components/form";
import "../styles/forms.css";

class Register extends Form {
  state = {
    data: { username: "", password: "", name: "" },
    errors: {},
  };

  schema = {
      username: Joi.string().email(),
      password: Joi.string().min(5).max(20),
      name: Joi.string()
  }

  doSubmit = () => {
      alert("Register successful!");
  }

  render() {
    return (
      <Fragment>
        <form onSubmit={this.handleSubmit} className="form">
          <h1>Register</h1>
          {this.renderInput("username", "Username", "enter email", true)}
          {this.renderInput("password", "Password", "5-20 characters", false, "password")}
          {this.renderInput("name", "Name", "displayed name")}
          {this.renderSubmitBtn("Register")}
        </form>
      </Fragment>
      //renderInput(name, lable, placeholder, isAutoFocus=false, type="text")
    );
  }
}

export default Register;
