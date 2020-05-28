import React from "react";
import "./MainPage.scss";
import logo from "../../assets/logo.png";
import PageTitle from "../PageTitle/PageTitle";
import { Router, Link } from "react-router-dom";
import TableRow from "../TableRow/TableRow";

const MainPage = (props) => {
  return (
    <div data-testid="landing-page">
      <PageTitle title="champions from 2005 to present" logo={logo} />
        <table>
          <tbody className="champions-table">
            <tr className="champions-table__header">
              <th>Year</th>
              <th>First name</th>
              <th>Last name</th>
            </tr>
            {props.champions.map((champion) => {
              return (
                <Link
                  to="/season-winners"
                  className="champions-table__row"
                  key={champion.championshipYear}
                >
                  <TableRow
                    row={[
                      champion.championshipYear,
                      champion.givenName,
                      champion.familyName,
                    ]}
                    handleClick={props.handleClick}
                    season={champion.championshipYear}
                  />
                </Link>
              );
            })}
          </tbody>
        </table>
    </div>
  );
};

export default MainPage;
