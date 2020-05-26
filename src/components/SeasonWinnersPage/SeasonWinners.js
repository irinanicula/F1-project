import React, { useState, useEffect } from 'react';
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
                    <th>First name</th>
                    <th>Last name</th>
                    <th>Points</th>
                </tr>
                {props.data.map((datum) => {
                    return (
                        <TableRow
                            row={[datum.wins, datum.points, datum.givenName, datum.familyName]}
                            champion={datum.champion}
                      />
                    );
                })}
                </tbody>
            </table>
        </div>
    )
}

export default SeasonWinners;