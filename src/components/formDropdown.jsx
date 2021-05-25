import React from "react";
import Select from 'react-select';

const FormDropdown = ({ lable, name, error, options, onChange }) => {
  return (
    <div className="form-group">
      <label htmlFor={name}>{lable}</label>
      {/* {error && (
        <span className="form-error-badge">
          <i className="fa fa-times-circle"></i>
        </span>
      )} */}
      <Select
        name={name}
        id={name}
        className=""
        options={options}
        onChange={onChange}
      />
    </div>
  );
};

export default FormDropdown;
