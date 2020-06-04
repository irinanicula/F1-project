import React from 'react';
import '../../stylesheets/main.scss';

const PageTitle = (props) => {
   return (
      <div className="page-title" data-testid="page-title">
         {props.logo && (
            <img
               className="page-title__logo"
               data-testid="logo"
               src={props.logo}
               alt="formula1-logo"
            />
         )}
         <h1 className="page-title__text">{props.title}</h1>
      </div>
   );
};

export default PageTitle;
