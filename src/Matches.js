import dataStore from "./dataStore";
import React, { useEffect, useState } from "react";
import { Table } from "semantic-ui-react";
import "./Matches.css";

const Matches = (props) => {
  const [matches, setMatches] = useState([]);

  useEffect(() => {
    dataStore.matches().then((res) => {
      console.log(res.data.matches);
      setMatches(res.data.matches);
    });
  }, []);

  return (
    <div className="matches">
      {matches.map((match) => {
        return (
          <Table key={match.id}>
            <thead>
              <tr>
                <th>Competition name</th>
                <th>Home Team</th>
                <th>Away Team</th>
                <th>Start time</th>
                <th>Home Score</th>
                <th>Away Score</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{match.competition.name}</td>
                <td>{match.homeTeam.name}</td>
                <td>{match.awayTeam.name}</td>
                <td>{match.utcDate}</td>
                {match.score.fullTime.homeTeam == null ? (
                  <td>-</td>
                ) : (
                  <td>{match.score.fullTime.homeTeam}</td>
                )}
                {match.score.fullTime.awayTeam == null ? (
                  <td>-</td>
                ) : (
                  <td>{match.score.fullTime.awayTeam}</td>
                )}
              </tr>
            </tbody>
          </Table>
        );
      })}
    </div>
  );
};

export default Matches;
