import React from 'react';
import './PageTitle.scss';

const PageTitle = (props) => {
    return (
        <div className="page-title">
            {props.logo ? <img src={props.logo} alt="formula1-logo"/> : null}
            <h1>{props.title}</h1>
        </div>
    )
}

export default PageTitle;