import React, { useEffect, useState } from "react";
import "./App.css";
import MainPage from "./components/MainPage/MainPage";
import SeasonWinners from "./components/SeasonWinnersPage/SeasonWinners";
import { Switch, Route } from "react-router-dom";

const App = () => {
  let [championsData, setChampionsData] = useState([]);
  let [winnersData, setWinnersData] = useState([]);
  let [isChampion, setIsChampion] = useState(true);

  const getChampionsData = () => {
    fetch("http://ergast.com/api/f1/driverStandings/1.json?limit=500")
      .then((response) => {
        return response.json();
      })
      //returning all the data, including year and champion information
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
      //returning all the data, including year and champion information
      .then((jsonResponse) => {
        return setWinnersData(transformWinnersArray(jsonResponse));
      });
  };

  console.log(winnersData)

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

  const transformWinnersArray = (response) => {
    const transformedResponse = [];
    //getting all drivers who won at least 1 race
    const filteredArray = response.MRData.StandingsTable.StandingsLists[0].DriverStandings.filter(
      (driver) => driver.wins > 0
    );
    
    let maxPoints = filteredArray[0].points;

    filteredArray.forEach(winner => {
      if(winner.points > maxPoints) {
        maxPoints = winner.points;
      }
      Object.assign(winner.Driver, {
        points: winner.points,
        wins: winner.wins,
        champion: winner.points === maxPoints ? true : false
      });
      transformedResponse.push(winner.Driver);
    })
    return transformedResponse;
  };

  const handleClick = (season) => {
    getWinnersData(season);
  };

  //research useEffect
  useEffect(() => {
    getChampionsData();
  }, []);

  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <MainPage data={championsData} handleClick={handleClick} />
        </Route>
        <Route path="/season-winners">
          <SeasonWinners data={winnersData} />
        </Route>
      </Switch>
    </div>
  );
};

export default App;
