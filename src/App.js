import "./App.css";
import "react-datepicker/dist/react-datepicker.css";
import React from "react";
import SearchParams from "./SearchParams";
import Matches from "./Matches";
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  // const [selectedDate, setSelectedDate] = useState(null)

  return (
    <div className="App">
      <Matches />
    </div>
  );
}

export default App;
