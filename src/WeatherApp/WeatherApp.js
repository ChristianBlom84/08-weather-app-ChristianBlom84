import React, { Component } from 'react';
import './WeatherApp.css';
import ApiDarkSky from '../api/ApiDarkSky';
import Navbar from './Navbar/Navbar';

class WeatherApp extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <main>
          <h1>What's the weather?</h1>
          <ApiDarkSky />
        </main>
      </div>
    );
  }
}

export default WeatherApp;