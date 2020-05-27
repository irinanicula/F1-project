import React from 'react';
import PageTitle from '../PageTitle/PageTitle';
import logo from '../../assets/logo.png';
import './SeasonWinners.scss';
import TableRow from '../TableRows/TableRows';

const SeasonWinners = (props) => {          
    return ( 
        <div>
            <PageTitle 
                title="season winners"
                logo={logo}
            />
            <table>
                {/* had to change class names to winners because the same class name creates confusion and due to specificity (mainPage also has an a element) it was loading only MainPage styles for the table rows*/}
                <tbody className="winners-table">
                <tr className="winners-table__header">
                    <th>Wins</th>
                    <th>Points</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Position</th>
                </tr>
                {props.winners.map((winner) => {
                    return (
                        <TableRow
                            row={[winner.wins, winner.points, winner.givenName, winner.familyName, winner.position]}
                            champion={winner.champion}
                      />
                    );
                })}
                </tbody>
            </table>
        </div>
    )
}

export default SeasonWinners;