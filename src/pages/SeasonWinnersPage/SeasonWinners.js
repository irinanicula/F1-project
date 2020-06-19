import React from 'react';
import PageTitle from '../../components/PageTitle/PageTitle';
import logo from '../../assets/logo.png';
import '../../stylesheets/main.scss';
import TableRow from '../../components/TableRow/TableRow';
import { useHistory } from 'react-router-dom';

const SeasonWinners = (props) => {
   let history = useHistory();

   return (
      <div data-testid="season-winners-page">
         <PageTitle title="season winners" logo={logo} />
         <button
            className="back-button"
            onClick={() => {
               history.goBack();
            }}
         >
            Back
         </button>
         <table className="table" data-testid="season-winners-table">
            {/* had to change class names to winners because the same class name creates confusion and due to specificity (mainPage also has an a element) it was loading only MainPage styles for the table rows*/}
            <tbody className="winners-table">
               <tr className="winners-table__header" align="center">
                  <th>Position</th>
                  <th>First Name</th>
                  <th>Last Name</th>
                  <th>Points</th>
                  <th>Wins</th>
               </tr>
               {props.winners.map((winner, index) => {
                  return (
                     <TableRow
                        row={[
                           winner.position,
                           winner.givenName,
                           winner.familyName,
                           winner.points,
                           winner.wins,
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
