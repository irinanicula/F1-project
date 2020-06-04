import { transformChampionsArray, transformWinnersArray } from '../utils/arrayTransformers';

export const getChampionsData = (setData, setError) => {
   fetch('http://ergast.com/api/f1/driverStandings/1.json?limit=500')
      .then((response) => {
         return response.json();
      })
      //setting the champions state to be the transformed array
      .then((jsonResponse) => {
         return setData(transformChampionsArray(jsonResponse));
      })
      .catch((error) => {
         return error ? setError(error) : null;
      });
};

export const getWinnersData = (season, setData, setError) => {
   //I chose this path so I could get the number of wins and points of the driver
   fetch(`http://ergast.com/api/f1/${season}/driverStandings.json?limit=500`)
      .then((response) => {
         return response.json();
      })
      //setting the winners state to be the transformed array
      .then((jsonResponse) => {
         return setData(transformWinnersArray(jsonResponse));
      })
      .catch((error) => {
         return error ? setError(error) : null;
      });
};
