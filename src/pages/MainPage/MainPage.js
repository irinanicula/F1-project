import React from 'react';
import '../../stylesheets/main.scss';
import logo from '../../assets/logo.png';
import PageTitle from '../../components/PageTitle/PageTitle';
import { Link } from 'react-router-dom';
import TableRow from '../../components/TableRow/TableRow';

const MainPage = (props) => {
   return (
      <div data-testid="landing-page">
         <PageTitle title="champions from 2005 to present" logo={logo} />
         <table className="table">
            <tbody className="champions-table">
               <tr className="champions-table__header">
                  <th>Year</th>
                  <th>First name</th>
                  <th>Last name</th>
               </tr>
               {props.champions.map((champion) => {
                  return (
                     <Link
                        to="/season/winners"
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
