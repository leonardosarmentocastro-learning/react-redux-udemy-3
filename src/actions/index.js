/**
 * NPM packages.
 */
import axios from 'axios';

const API_KEY   = 'f79a7caa20a17fb37d44650b6e2c342c';
const ROOT_URL  = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER    = 'FETCH_WEATHER';
export function fetchWeather(city) {
  const query   = `q=${city},us`;
  const url     = `${ROOT_URL}&${query}`;
  const request = axios.get(url);

  /** @name APPROACH 1 */
  // const action = {
  //   type: FETCH_WEATHER,
  //   payload: request
  // };
  // return action;

  /** @name APPROACH 2 */
  return request
    .then(response => {

      const weather = response.data;
      const action  = {
        type: FETCH_WEATHER,
        payload: weather
      };

      return action;
    })
    .catch(response => {
      /** ... */
    });
}
