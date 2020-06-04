import React, { useEffect, useState } from 'react';
import './stylesheets/main.scss';
import MainPage from './pages/MainPage/MainPage';
import SeasonWinners from './pages/SeasonWinnersPage/SeasonWinners';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import { getChampionsData, getWinnersData } from './services/getDrivers';

const App = () => {
   let [championsData, setChampionsData] = useState([]);
   let [winnersData, setWinnersData] = useState([]);
   let [error, setError] = useState('');

   const handleClick = (season) => {
      getWinnersData(season, setWinnersData, setError);
   };

   //provide an empty array as second argument to the effect hook to avoid activating it on component updates but only for the mounting of the component
   useEffect(() => {
      getChampionsData(setChampionsData, setError);
   }, []);

   return (
      <div className="app" data-testid="app">
         {/* uses the HTML5 History API */}
         <BrowserRouter>
            <Switch>
               <Route exact path="/">
                  {error ? (
                     <h1>
                        {error.name} : {error.message}
                     </h1>
                  ) : (
                     <MainPage champions={championsData} handleClick={handleClick} />
                  )}
               </Route>
               <Route path="/season/winners">
                  {error ? (
                     <h1>
                        {error.name} : {error.message}
                     </h1>
                  ) : (
                     <SeasonWinners winners={winnersData} />
                  )}
               </Route>
            </Switch>
         </BrowserRouter>
      </div>
   );
};

export default App;
