import dataStore from "./dataStore";
import React, { Component, useEffect } from "react";
import { Table } from "semantic-ui-react";
import Loading from "./Loading";
import axios from "axios";

// axios.defaults.headers.common["header1"] = "4346ebc0fe37409997ff960499a8dd23"; // for all requests

let config = {
  headers: {
    "X-Auth-Token": "4346ebc0fe37409997ff960499a8dd23",
  },
};

const Matches = () => {
  const [matches, setMatches] = [];

  useEffect(() => {
    axios("https://api.football-data.org/v2/matches", config).then((res) => {
      console.log(res.matches);
      setMatches(res.matches.matches);
    });
  }, []);

  return (
    <div className="matches">
      <h2>hi</h2>
    </div>
  );
};

export default Matches;
