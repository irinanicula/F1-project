import React from "react";
import PageTitle from "../PageTitle/PageTitle";
import logo from "../../assets/logo.png";
import "./SeasonWinners.scss";
import TableRow from "../TableRow/TableRow";
import { useHistory } from "react-router-dom";

const SeasonWinners = (props) => {
    let history = useHistory();

  return (
    <div data-testid="season-winners-page">
      <PageTitle title="season winners" logo={logo} />
      <button className="back-button" onClick={() => {history.goBack()}}>Back</button>
      <table data-testid="season-winners-table">
        {/* had to change class names to winners because the same class name creates confusion and due to specificity (mainPage also has an a element) it was loading only MainPage styles for the table rows*/}
        <tbody className="winners-table">
          <tr className="winners-table__header">
            <th>Wins</th>
            <th>Points</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Position</th>
          </tr>
          {props.winners.map((winner, index) => {
            return (
              <TableRow
                row={[
                  winner.wins,
                  winner.points,
                  winner.givenName,
                  winner.familyName,
                  winner.position,
                ]}
                champion={winner.champion}
                key={index}
              />
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default SeasonWinners;
