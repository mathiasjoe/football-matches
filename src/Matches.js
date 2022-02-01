import dataStore from "./dataStore";
import React, { Component, useEffect } from "react";
import { Table } from "semantic-ui-react";
import Loading from "./Loading";

const Matches = (props) => {
  const [matches, setMatches] = [];

  useEffect(() => {
    dataStore.matches().then((res) => {
      console.log(res.matches);
      setMatches(res.matches);
    });
  }, []);

  return (
    <div className="matches">
      <h1>hei</h1>
    </div>
  );
};

export default Matches;
