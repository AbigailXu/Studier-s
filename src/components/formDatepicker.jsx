import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


const FormDatePicker = ({ label, name, onPick }) => {
  const [startDate, setStartDate] = useState(new Date());
  return (
    <div className="form-group">
      <p>{label}</p>
      <DatePicker
        selected={startDate}
        onChange={(date) => {
          setStartDate(date);
          //const pickedDate = {m:startDate.getMonth()+1, d:startDate.getDay()+1};
          onPick(date, name);
        }}
      />
    </div>
  );
};

export default FormDatePicker;
