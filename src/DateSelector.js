import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function DateSelector({ selected, onChange }) {
  const [minDate, maxDate] = dateRange();
  // console.log("DateSelector", { selected, minDate, maxDate });
  // return <input type="date" value={selected} onChange={onChange} />
  return (
    <div className="datepicker">
      <header>Click to select a date</header>
      <DatePicker
        placeholderText="Click to select a date"
        selected={selected}
        onChange={onChange}
        minDate={minDate}
        maxDate={maxDate}
        dateFormat={"yyyy-MM-dd"}
      />
    </div>
  );
}

export function dateRange(date = new Date()) {
  return [addDays(date, -2), addDays(date, +7)];
}

const MS_IN_DAY = 1000 * 60 * 60 * 24;
const addDays = (date, days) => new Date(date.getTime() + days * MS_IN_DAY);
