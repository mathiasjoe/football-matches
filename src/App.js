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
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedCompetition, setSelectedCompetition] = useState("PL");

  const [allCompetitions, setAllCompetitions] = useState([]);
  const [matches, setMatches] = useState([]);

  useEffect(() => {
    console.log("useEffect competitions");
    dataStore.competitions().then((res) => {
      setAllCompetitions(res.data.competitions);
    });
  }, []);

  useEffect(() => {
    console.log("useEffect matches", { selectedCompetition, selectedDate });
    const [dateFrom, dateTo] = dateRange().map(toDateISO);
    dataStore.matches(selectedCompetition, dateFrom, dateTo).then((res) => {
      setMatches(res.data.matches);
    });
  }, [allCompetitions, selectedDate, selectedCompetition]);

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

const toDateISO = (d) => d.toISOString().split("T")[0];
