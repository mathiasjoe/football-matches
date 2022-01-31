import { useState } from "react";

const SearchParams = () => {
  const [selectedCompetition, setSelectedCompetition] = useState("PL");

  return (
    <div className="search-params">
      <form>
        <select
          name="select-competition"
          id="select-competition"
          defaultValue={selectedCompetition}
          onChange={(e) => setSelectedCompetition(e.target.value)}
        >
          <option value="WC"> FIFA World Cup</option>
          <option value="CL"> UEFA Champions League</option>
          <option value="BL1"> Bundesliga</option>
          <option value="DED"> Eredivisie</option>
          <option value="BSA"> Campeonato Brasileiro Série A</option>
          <option value="PD"> Primera Division</option>
          <option value="FL1"> Ligue 1</option>
          <option value="ELC"> Championship</option>
          <option value="PPL"> Primeira Liga</option>
          <option value="EC"> European Championship</option>
          <option value="SA"> Serie A</option>
          <option value="CLI"> Copa Libertadores</option>
          <option value="PL"> Premier League</option>
        </select>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default SearchParams;
