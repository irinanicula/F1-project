import React from 'react';

const TableRow = (props) => {

    let tableItems = props.row.map(key => <td>{key}</td>)
    console.log(props.row)

    return (
        <tr 
            className={`winners-table__row ${props.champion === true ? "winners-table__champion": ""}`}
            onClick={() => props.handleClick ? props.handleClick(props.season) : null}
        >
            {tableItems}     
        </tr>
    )
}

export default TableRow;