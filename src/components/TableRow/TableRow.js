import React from 'react';
import '../../stylesheets/main.scss';

const TableRow = (props) => {
   let tableItems = props.row.map((tableItem, index) => (
      <td
         className={`table-row__item ${
            props.champion === true && index === 0 ? 'table-row--champion' : ''
         }`}
         key={index}
      >
         {tableItem}
      </td>
   ));

   return (
      <tr
         align="center"
         role="table-data"
         className="table-row"
         onClick={() => (props.handleClick ? props.handleClick(props.season) : null)}
      >
         {tableItems}
      </tr>
   );
};

export default TableRow;
