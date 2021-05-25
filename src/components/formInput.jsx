import React from "react";


const FormInput = ({
  lable,
  name,
  isAutoFocus,
  error,
  ...rest
}) => {
  return (
    <div className="form-group">
      <label htmlFor={name}>{lable}</label>
      {error && (
        <span className="form-error-badge">
          <i className="fa fa-times-circle"></i>
        </span>
      )}
      <input
        {...rest}
        autoFocus={isAutoFocus}
        name={name}
        id={name}
        className="form-control"
      />
    </div>
  );
};

export default FormInput;
