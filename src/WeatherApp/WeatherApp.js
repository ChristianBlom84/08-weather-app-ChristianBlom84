import React, { Component } from 'react';
import './WeatherApp.css';
import ApiDarkSky from '../api/ApiDarkSky';
import Navbar from './Navbar/Navbar';

class WeatherApp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      units: '?units=auto'
    }
  }

  changeUnits = (unitFormat) => {
    console.log(unitFormat);
    this.setState({
      units: unitFormat
    });
  }

  render() {
    return (
      <div>
        <Navbar changeUnits={this.changeUnits}/>
        <main>
          <h1>What's the weather?</h1>
          <ApiDarkSky units={this.state.units}/>
        </main>
      </div>
    );
  }
}

export default WeatherApp;