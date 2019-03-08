import React, { Component } from 'react';
import './WeatherApp.css';
import ApiDarkSky from '../api/ApiDarkSky';

class WeatherApp extends Component {
  render() {
    return (
      <div>
        <h1>Weather app testing</h1>
        <ApiDarkSky />
      </div>
    );
  }
}

export default WeatherApp;