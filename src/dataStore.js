import axios from "axios";

const request = {
  URL: "https://api.football-data.org/v2/",
  responseType: "json",
  timeout: 15000,
  headers: {
    "X-Auth-Token": "4346ebc0fe37409997ff960499a8dd23",
  },
};

const dataStore = {
  matches: () => {
    return axios.get(request.URL + "/matches", request);
  },
  competition: (id) => {
    return axios.get(
      request.URL + request.URL + "competitions/" + id + "/matches",
      request
    );
  },
};

export default dataStore;
