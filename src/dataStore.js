import axios from "axios";

const request = {
  URL: "https://api.football-data.org/v2/",
  timeout: 15000,
  headers: {
    "X-Auth-Token": "4346ebc0fe37409997ff960499a8dd23",
  },
};

const dataStore = {
  competitions: () => {
    // http://api.football-data.org/v2/competitions/
    // fake data response to only include matches I have permissions to
    return new Promise((resolve, reject) => {
      const res = {
        data: {
          competitions: [
            ["PL", "Premier League"],
            ["WC", "FIFA World Cup"],
            ["CL", "UEFA Champions League"],
            ["BL1", "Bundesliga"],
            ["DED", "Eredivisie"],
            ["BSA", "Campeonato Brasileiro Série A"],
            ["PD", "Primera Division"],
            ["FL1", "Ligue 1"],
            ["ELC", "Championship"],
            ["PPL", "Primeira Liga"],
            ["EC", "European Championship"],
            ["SA", "Serie A"],
            ["CLI", "Copa Libertadore"],
          ],
        },
      };
      resolve(res);
    });
  },

  // GET http://api.football-data.org/v2
  //   /competitions/{id}/matches?dateFrom={}&dateTo={}
  matches: (id, dateFrom, dateTo) => {
    const url = `${request.URL}competitions/${id}/matches?dateFrom=${dateFrom}&dateTo=${dateTo}`;
    return axios.get(url, request);
  },
};

export default dataStore;
