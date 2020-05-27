import React, { useEffect, useState } from "react";
import "./App.css";
import MainPage from "./components/MainPage/MainPage";
import SeasonWinners from "./components/SeasonWinnersPage/SeasonWinners";
import { Switch, Route } from "react-router-dom";

const App = () => {
  let [championsData, setChampionsData] = useState([]);
  let [winnersData, setWinnersData] = useState([]);

  const getChampionsData = () => {
    fetch("http://ergast.com/api/f1/driverStandings/1.json?limit=500")
      .then((response) => {
        return response.json();
      })
      //setting the champions state to be the transformed array
      .then((jsonResponse) => {
        setChampionsData(transformChampionsArray(jsonResponse));
      });
  };

  const getWinnersData = (season) => {
    //I chose this path so I could get the number of wins and points of the driver
    fetch(`http://ergast.com/api/f1/${season}/driverStandings.json?limit=500`)
      .then((response) => {
        return response.json();
      })
      //setting the winners state to be the transformed array 
      .then((jsonResponse) => {
        return setWinnersData(transformWinnersArray(jsonResponse));
      });
  };

  //this function serves the purpose of transforming the response we get from the api to a format we can easily use
  const transformChampionsArray = (response) => {
    const transformedResponse = [];
    const filteredResponse = response.MRData.StandingsTable.StandingsLists.filter(
      (championship) => championship.season >= 2005
    );

    // adding the season to the Drivers object, and then pushing this new object to the transformedResponse array
    filteredResponse.forEach((championship) => {
      Object.assign(championship.DriverStandings[0].Driver, {
        championshipYear: championship.season,
      });
      transformedResponse.push(championship.DriverStandings[0].Driver);
    });

    return transformedResponse;
  };

  //this function serves the purpose of transforming the response we get from the api to a format we can easily use
  const transformWinnersArray = (response) => {
    const transformedResponse = [];
    //getting all drivers who won at least 1 race
    const filteredArray = response.MRData.StandingsTable.StandingsLists[0].DriverStandings.filter(
      (driver) => driver.wins > 0
    );
    
    //adding the points, wins and position to the Driver object and then pushing it to the transformed response
    filteredArray.forEach(winner => {
      Object.assign(winner.Driver, {
        points: winner.points,
        wins: winner.wins,
        position: winner.position,
        champion: winner.position === "1" ? true : false
      });
      transformedResponse.push(winner.Driver);
    })
    return transformedResponse;
  };

  const handleClick = (season) => {
    getWinnersData(season);
  };

  //provide an empty array as second argument to the effect hook to avoid activating it on component updates but only for the mounting of the component
  useEffect(() => {
    getChampionsData();
  }, []);

  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <MainPage champions={championsData} handleClick={handleClick} />
        </Route>
        <Route path="/season-winners">
          <SeasonWinners winners={winnersData} />
        </Route>
      </Switch>
    </div>
  );
};

export default App;
