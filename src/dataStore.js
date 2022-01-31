import axios from "axios";

const request = {
  URL: "https://api.football-data.org/v1/",
  responseType: "json",
  timeout: 15000,
  headers: {
    "X-Auth-Token": "4346ebc0fe37409997ff960499a8dd23",
  },
};

const dataStore = {
  matches: (id) => {
    return axios.get(request.URL + "competitions/" + id + "/fixtures", request);
  },
  teams: (competition) => {
    return axios.get(
      request.URL + "competitions/" + competition + "/teams",
      request
    );
  },
};

export default dataStore;
