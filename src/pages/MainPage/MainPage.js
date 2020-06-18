import React, { useState } from 'react';
import '../../stylesheets/main.scss';
import logo from '../../assets/logo.png';
import PageTitle from '../../components/PageTitle/PageTitle';
import { Link } from 'react-router-dom';
import TableRow from '../../components/TableRow/TableRow';

const MainPage = (props) => {
   const [sortConfig, setSortConfig] = useState({ key: '', direction: 'ascending' });

   let sortedChampions = [...props.champions];

   // useMemo is a way to cache — or memoize — expensive computations. So given the same input, it doesn’t have to sort the products twice if we re-render our component for some reason
   React.useMemo(() => {
      sortedChampions.sort((a, b) => {
         if (a[sortConfig.key] < b[sortConfig.key]) {
            return sortConfig.direction === 'ascending' ? -1 : 1;
         }
         if (a[sortConfig.key] > b[sortConfig.key]) {
            return sortConfig.direction === 'ascending' ? 1 : -1;
         }
         return 0;
      });
      return sortedChampions;
   }, [sortedChampions, sortConfig]);

   const requestSort = (key) => {
      let direction = 'ascending';
      if (sortConfig.key === key && sortConfig.direction === 'ascending') {
         direction = 'descending';
      }
      setSortConfig({ key, direction });
   };

   const changeSortClass = (key) => {
      let sortClass;
      if (sortConfig.key === key && sortConfig.direction === 'ascending') {
         sortClass = 'sort-descending';
      }
      return sortClass;
   };

   return (
      <div data-testid="landing-page">
         <PageTitle title="champions from 2005 to present" logo={logo} />
         <table className="table">
            <tbody className="champions-table">
               <tr className="champions-table__header">
                  <th
                     className="champions-table__header"
                     onClick={() => requestSort('championshipYear')}
                  >
                     Year
                     <span className={() => changeSortClass('championshipYear')}>⬇</span>
                  </th>
                  <th className="champions-table__header" onClick={() => requestSort('givenName')}>
                     First name
                     <span
                        className={
                           sortConfig.key === 'givenName' && sortConfig.direction === 'descending'
                              ? 'sort-descending'
                              : null
                        }
                     >
                        ⬇
                     </span>
                  </th>
                  <th className="champions-table__header" onClick={() => requestSort('familyName')}>
                     Last name
                     <span
                        className={
                           sortConfig.key === 'familyName' && sortConfig.direction === 'descending'
                              ? 'sort-descending'
                              : null
                        }
                     >
                        ⬇
                     </span>
                  </th>
               </tr>
               {sortedChampions.map((champion) => {
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
