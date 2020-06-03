import React from 'react';
import './PageTitle.scss';

const PageTitle = (props) => {
   return (
      <div className="page-title" data-testid="page-title">
         {props.logo && <img data-testid="logo" src={props.logo} alt="formula1-logo" />}
         <h1>{props.title}</h1>
      </div>
   );
};

export default PageTitle;
