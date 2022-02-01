import React from "react";
import { Table } from "semantic-ui-react";
import "./Matches.css";

export default function Matches({ matches }) {
  return (
    <Table>
      <thead>
        <tr>
          <th>Home Team</th>
          <th>Away Team</th>
          <th>Date</th>
          <th>Start time</th>
          <th>Score</th>
        </tr>
      </thead>
      <tbody>
        {matches.map((match) => (
          <Match key={match.id} match={match} />
        ))}
      </tbody>
    </Table>
  );
}

function Match({ match }) {
  const matchDate = new Date(match.utcDate);
  return (
    <tr>
      <td>{match.homeTeam.name}</td>
      <td>{match.awayTeam.name}</td>
      <td>{matchDate.toLocaleDateString()}</td>
      <td>{matchDate.toLocaleTimeString()}</td>
      <td>
        <Score score={match.score.fullTime.homeTeam} />:
        <Score score={match.score.fullTime.awayTeam} />
      </td>
    </tr>
  );
}

const Score = ({ score }) => score || "0";
