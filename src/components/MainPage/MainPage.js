import React from "react";
import "./MainPage.scss";
import logo from "../../assets/logo.png";
import PageTitle from "../PageTitle/PageTitle";
import { Link } from "react-router-dom";
import TableRow from "../TableRows/TableRows";

const MainPage = (props) => {
  return (
    <div>
      <PageTitle 
        title="champions from 2005 to present" 
        logo={logo} 
      />
      <table>
        <tbody className="champions-table">
          <tr className="champions-table__header">
            <th>Year</th>
            <th>First name</th>
            <th>Last name</th>
          </tr>
          {props.data.map((datum) => {
            return (
              <Link
                to="/season-winners"
                className="champions-table__row"
                key={datum.championshipYear}
              >
                <TableRow
                  row={[datum.championshipYear, datum.givenName, datum.familyName]}
                  handleClick={props.handleClick}
                  season={datum.championshipYear}
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
