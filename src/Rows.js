// const Rows = (props) => {
//   return (
//     <tr>
//       <td className="teams">{props.homeTeam.name}</td>
//       <td>{props.score.fullTime.homeTeam}</td>
//       <td>{props.awayTeam.name}</td>
//       <td>{props.score.fullTime.awayTeam}</td>
//       <td>{props.goals}</td>
//     </tr>
//   );
// };

// export default Rows;

// import { Link } from "react-router-dom"

// const leagues = [
//   ['WC', 'FIFA World Cup'],
//   ['CL', 'UEFA Champions League']
// ]

// const SearchParams = () => {
//   return (
//     <ul className="search-params">
//       {leagues.map(([value, label]) =>
//         <li>
//           <Link to={`/competition/${value}`}>{label}</Link>
//         </li>
//       )}
//     </ul>
//   )
// }

// export default SearchParams

// import dataStore from "./dataStore"
// import React, { Component } from "react"
// import { Table } from "semantic-ui-react"

// function Matches(props) {
//   console.log(props)
//   return <p>hi</p>
// }

// matches.map( Match )

// function Match({ homeTeam, awayTeam, competition, osv... }) {
//   return <tr>{homeTeam}...</tr>
// }
// matches.map(
//     ( { homeTeam, awayTeam, ...} ) =>
//        <tr>{homeTeam}...</tr>
//   )
