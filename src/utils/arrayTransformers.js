//this function serves the purpose of transforming the response we get from the api to a format we can easily use
export const transformChampionsArray = (response) => {
   const filteredResponse = response.MRData.StandingsTable.StandingsLists.filter(
      (championship) => championship.season >= 2005
   );

   // adding the season to the Drivers object, and then pushing this new object to the transformedResponse array
   return filteredResponse.map((championship) => {
      Object.assign(championship.DriverStandings[0].Driver, {
         championshipYear: championship.season,
      });
      return championship.DriverStandings[0].Driver;
   });
};

//this function serves the purpose of transforming the response we get from the api to a format we can easily use
export const transformWinnersArray = (response) => {
   //getting all drivers who won at least 1 race
   const filteredArray = response.MRData.StandingsTable.StandingsLists[0].DriverStandings.filter(
      (driver) => driver.wins > 0
   );

   //adding the points, wins and position to the Driver object and then pushing it to the transformed response
   return filteredArray.map((winner) => {
      Object.assign(winner.Driver, {
         points: winner.points,
         wins: winner.wins,
         position: winner.position,
         //should be just winner.position === "1" because that is what === returns (true or false)
         champion: winner.position === '1' ? true : false,
      });
      return winner.Driver;
   });
};
