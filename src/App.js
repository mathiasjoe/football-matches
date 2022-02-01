import "./App.css";
import "react-datepicker/dist/react-datepicker.css";
import React from "react";
import Matches from "./Matches";
import { BrowserRouter as Router, Route } from "react-router-dom";
import SearchParams from "./SearchParams";
import DateSelector from "./DateSelector";

function App() {
  // const [selectedDate, setSelectedDate] = useState(null)

  return (
    <div className="App">
      <DateSelector />
    </div>
  );
}

export default App;
