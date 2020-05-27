import React from 'react';
import './TableRows.scss'

const TableRow = (props) => {

    let tableItems = props.row.map(key => <td>{key}</td>)

    return (
        <tr 
            className={`table-row ${props.champion === true ? "table-row__champion": ""}`}
            onClick={() => props.handleClick ? props.handleClick(props.season) : null}
        >
            {tableItems}     
        </tr>
    )
}

export default TableRow;