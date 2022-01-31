import dataStore from "./dataStore";
import React, { Component } from "react";
import { Table } from "semantic-ui-react";
import Loading from "./Loading";

class Competiions extends Component {
  state = { data: [], loading: true };

  componentHasReceivedProps() {
    this.fetchCompetitions(this.props.match.params.season);
  }

  componentWillReceiveProps(newProps) {
    this.fetchCompetitions(newProps.match.params.season);
  }

  fetchCompetitions(id) {
    this.setState({ loading: true });
    dataStore.competition(id).then((res) => {
      console.log(res);
      this.setState({
        data: res.data.competitions,
        loading: false,
      });
    });
  }

  render() {
    return <div>{this.state.loading ? <Loading /> : this.createTable}</div>;
  }
}

export default Competiions;
