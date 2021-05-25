import { Component } from "react";
import FormInput from "./formInput";
import FormDropdown from "./formDropdown";
import FormDatePicker from "./formDatepicker";
import Joi from "joi-browser";

class Form extends Component {
  state = {
    data: {},
    errors: {},
  };

  validate = () => {
    const noAbo = { abortEarly: false };
    const { error } = Joi.validate(this.state.data, this.schema, noAbo);
    let errors = {};
    if (error) error.details.map((e) => (errors[e.path] = e.message));
    return errors;
  };

  validateChange = (targetName, targetValue) => {
    const errors = { ...this.state.errors };
    const schemaSub = { [targetName]: this.schema[targetName] };
    const { error } = Joi.validate({ [targetName]: targetValue }, schemaSub);
    error
      ? (errors[targetName] = error.details[0].message)
      : delete errors[targetName];
    return errors;
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const errors = this.validate();
    this.setState({ errors });
    if (Object.keys(errors).length) return;
    this.doSubmit();
  };

  handleChange = ({ currentTarget: input }) => {
    const data = { ...this.state.data };
    data[input.name] = input.value;
    this.setState({ data });
    this.setState({ errors: this.validateChange(input.name, input.value) });
  };

  handleDropdown = (e) => {
    const data = { ...this.state.data };
    data[e.topic] = e.value;
    this.setState({ data: data });
  };

  handleDatepicker = (date, name) => {
    const data = { ...this.state.data };
    data[name] = date;
    console.log(date);
    this.setState({ data });
  };

  renderInput(name, lable, placeholder, isAutoFocus = false, type = "text") {
    const { data, errors } = this.state;
    return (
      <FormInput
        type={type}
        isAutoFocus={isAutoFocus}
        lable={lable}
        value={data[name]}
        name={name}
        onChange={this.handleChange}
        error={errors[name]}
        placeholder={placeholder}
      />
    );
  }

  renderDropdown(name, lable, options) {
    const { data, errors } = this.state;
    return (
      <FormDropdown
        options={options}
        lable={lable}
        value={data[name]}
        name={name}
        onChange={this.handleDropdown}
        error={errors[name]}
      />
    );
  }

  renderDatepicker(name, label) {
    const { data, errors } = this.state;
    return (
      <FormDatePicker
        name={name}
        label={label}
        value={data[name]}
        error={errors[name]}
        onPick={this.handleDatepicker}
      />
    );
  }

  renderSubmitBtn(lable) {
    return (
      <div className="form-group">
        <button
          disabled={Object.keys(this.validate()).length !== 0}
          className="btn btn-dark"
        >
          {lable}
        </button>
      </div>
    );
  }
}

export default Form;
