import React from "react";
import DateSelector from "./DateSelector";
import "./SearchParams.css";

export default function SearchParams({
  allCompetitions,
  selectedCompetition,
  selectedDate,
  setSelectedCompetition,
  setSelectedDate,
}) {
  // console.log("SearchParams", { selectedCompetition, selectedDate });

  return (
    <div className="search-params">
      <form>
        <header>Click to select a competition</header>
        <select
          name="select-competition"
          id="select-competition"
          defaultValue={selectedCompetition}
          onChange={(e) => setSelectedCompetition(e.target.value)}
        >
          {allCompetitions.map(([id, name]) => (
            <option key={id} value={id}>
              {name}
            </option>
          ))}
        </select>
      </form>
    </div>
  );
}
