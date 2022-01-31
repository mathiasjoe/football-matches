import dataStore from "./dataStore";
import React, { Component } from "react";
import { Table } from "semantic-ui-react";

class Matches extends Component {
  state = { data: [], loading: true };

  componentWillReceiveProps(newProps) {
    this.fetchFixtures(newProps.match.params.id);
  }

  fetchMatches(id) {
    this.setState({ loading: true });
    dataStore.matches(id).then((res) => {
      console.log(res);
      this.setState({
        data: res.data.matches,
        loading: false,
      });
    });
  }

  renderScore(data) {
    if (data.goalsHomeTeam !== null)
      return data.goalsHomeTeam + ":" + data.goalsAwayTeam;
  }

  sortMatches(a, b) {
    if (a.matchday < b.matchday) return -1;
    if (a.matchday > b.matchday) return 1;
    if (a.date < b.date) return -1;
    if (a.date > b.date) return 1;
    return 0;
  }

  createTable() {
    return (
      <Table celled>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell textAlign="center" rowSpan="2">
              Match Day
            </Table.HeaderCell>
            <Table.HeaderCell textAlign="center" rowSpan="2">
              Date
            </Table.HeaderCell>
            <Table.HeaderCell textAlign="center" rowSpan="2">
              Status
            </Table.HeaderCell>
            <Table.HeaderCell textAlign="center" rowSpan="2">
              Home Team
            </Table.HeaderCell>
            <Table.HeaderCell textAlign="center" rowSpan="2">
              Away Team
            </Table.HeaderCell>
            <Table.HeaderCell textAlign="center" colSpan="2">
              Score
            </Table.HeaderCell>
          </Table.Row>
          <Table.Row>
            <Table.HeaderCell textAlign="center">FT</Table.HeaderCell>
            <Table.HeaderCell textAlign="center">1</Table.HeaderCell>
            <Table.HeaderCell textAlign="center">X</Table.HeaderCell>
            <Table.HeaderCell textAlign="center">2</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {this.state.data.sort(this.sortData).map((row) => {
            return (
              <Table.Row key={row.id}>
                <Table.Cell textAlign="center">{row.matchday}</Table.Cell>
                <Table.Cell textAlign="center">{row.date}</Table.Cell>
                <Table.Cell textAlign="center">{row.status}</Table.Cell>
                <Table.Cell textAlign="center">
                  {this.renderScore(row.result)}
                </Table.Cell>
                <Table.Cell textAlign="left">{row.homeTeamName}</Table.Cell>
                <Table.Cell textAlign="left">{row.awayTeamName}</Table.Cell>
                <Table.Cell textAlign="center">
                  {this.renderFTScore(row.result)}
                </Table.Cell>
              </Table.Row>
            );
          })}
        </Table.Body>
      </Table>
    );
  }

  render() {
    return <div>{this.createTable}</div>;
  }
}

export default Matches;
