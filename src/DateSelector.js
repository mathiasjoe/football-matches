import React, { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import addDays from "date-fns/addDays";

const DateSelector = () => {
  const [date, setDate] = useState(null);

  const onChange = (date) => {
    setDate(date);
  };

  return (
    <div className="datepicker">
      <DatePicker
        placeholderText="Click to select a date"
        selected={date}
        onChange={onChange}
        minDate={addDays(new Date(), -2)}
        maxDate={addDays(new Date(), 7)}
        dateFormat={"yyyy-MM-dd"}
      />
    </div>
  );
};

export default DateSelector;
