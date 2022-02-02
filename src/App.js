import React, { useState, useEffect } from "react";
import dataStore from "./dataStore";
import Matches from "./Matches";
import SearchParams from "./SearchParams";
import { dateRange } from "./DateSelector";
import "./App.css";

/*
 *
 */
export default function App() {
  const [selectedDate, setSelectedDate] = useState(new Date()); // Const of the selected date, sets new Date() (today) as default.
  const [selectedCompetition, setSelectedCompetition] = useState("PL"); //Const of the selected competition, sets Premier League as the default.

  const [allCompetitions, setAllCompetitions] = useState([]); // Empty array of all the competitions, used in the SearchParams to choose between the different leagues.
  const [matches, setMatches] = useState([]); // List of all the matches, empty array as a default

  useEffect(() => {
    dataStore.competitions().then((res) => {
      setAllCompetitions(res.data.competitions);
    });
  }, []);

  useEffect(() => {
    console.log("useEffect matches", { selectedCompetition, selectedDate }); // Logger for the result from the API, where you can see the input.
    const [dateFrom, dateTo] = dateRange().map(toDateISO);
    dataStore.matches(selectedCompetition, dateFrom, dateTo).then((res) => {
      setMatches(res.data.matches);
    });
  }, [allCompetitions, selectedDate, selectedCompetition]); // Every time one of these attributes is changed the useEffect hook will run.

  return (
    <div className="App">
      <h1 className="App-header">Fotball Matches</h1>
      <SearchParams
        allCompetitions={allCompetitions}
        selectedDate={selectedDate}
        selectedCompetition={selectedCompetition}
        setSelectedCompetition={setSelectedCompetition}
        setSelectedDate={setSelectedDate}
      />
      <Matches matches={matches} />
    </div>
  );
}

const toDateISO = (d) => d.toISOString().split("T")[0]; // Format the date to ISO format, to match the input from the API
