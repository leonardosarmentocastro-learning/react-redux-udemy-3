/**
 * NPM packages.
 */
import React, { Component } from 'react';
import { connect } from 'react-redux';

/**
 * Project packages.
 */
import Chart from '../components/chart';
import GoogleMap from '../components/google_map';

class WeatherList extends Component {
  render() {
    const weather   = this.props.weather;
    const template  = (
      <table className="table table-hover">
        <thead>
          <tr>
            <th>City</th>
            <th>Temperature (K°)</th>
            <th>Pressure (hPa)</th>
            <th>Humidity (%)</th>
          </tr>
        </thead>
        <tbody>
          {weather.map(this.renderWeather)}
        </tbody>
      </table>
    );

    return template;
  }

  renderWeather(cityData) {
    const name        = cityData.city.name;
    const coordinates = cityData.city.coord;
    const {lat, lon}  = coordinates;

    /** Getting data for charts. */
    const list          = cityData.list;
    const temperatures  = list.map(weather => {
      const temperature = weather.main.temp;
      return temperature;
    });
    const pressures  = list.map(weather => {
      const pressure = weather.main.pressure;
      return pressure;
    });
    const humidities  = list.map(weather => {
      const humidity = weather.main.humidity;
      return humidity;
    });

    const template  = (
      <tr key={name}>
        <td><GoogleMap lat={lat} lon={lon}/></td>
        <td><Chart data={temperatures} color='orange' unit="K°"/></td>
        <td><Chart data={pressures} color='green' unit="hPa"/></td>
        <td><Chart data={humidities} color='blue' unit="%"/></td>
      </tr>
    );

    return template;
  }
}

function mapStateToProps(state) {
  const weather = state.weather;
  const props   = { weather };

  return props;
}

const Container = connect(mapStateToProps)(WeatherList);
export default Container;
