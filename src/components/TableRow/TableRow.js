import React from 'react';
import './TableRow.scss';

const TableRow = (props) => {
   let tableItems = props.row.map((data, index) => <td key={index}>{data}</td>);

   return (
      <tr
         role="table-data"
         className={`table-row ${props.champion === true ? 'table-row__champion' : ''}`}
         onClick={() => (props.handleClick ? props.handleClick(props.season) : null)}
      >
         {tableItems}
      </tr>
   );
};

export default TableRow;
