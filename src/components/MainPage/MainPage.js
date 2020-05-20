import React, { useEffect, useState } from "react";

const MainPage = () => {
  let [data, setData] = useState([]);

  const getChampionsData = () => {
    fetch("http://ergast.com/api/f1/driverStandings/1.json?limit=500")
      .then((response) => {
        return response.json();
      })
      //returning all the data, including year and champion information
      .then((jsonResponse) => {
        //figure out why this works better
        return setData(jsonResponse.MRData.StandingsTable.StandingsLists.filter(champion => champion.season >= 2005));   
      })
  }

    //research useEffect
    useEffect(() => {
        getChampionsData();
    }, []);

  return (
    <div>
        <table>
            <tbody>
                {console.log(data.map(datum => datum.DriverStandings[0].Driver))}
                {
                    data.map(datum => {
                        return <tr key={datum.season}>
                                    <td>{datum.season}</td>
                                    <td>{datum.DriverStandings[0].Driver.givenName} {datum.DriverStandings[0].Driver.familyName}</td>
                                </tr>
                })}
            </tbody>
        </table>
    </div>
  );
};

export default MainPage;
