import React, { Component } from 'react';
import './WeatherApp.css';
import ApiDarkSky from '../api/ApiDarkSky';
import Navbar from './Navbar/Navbar';

class WeatherApp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      units: '?units=auto',
      value: '',
      searchLocation: '',
      coords: '/59.3260668, 17.841971'
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  changeUnits = (unitFormat) => {
    console.log(unitFormat);
    this.setState({
      units: unitFormat
    });
  }

  handleChange(event) {
    this.setState({
      value: event.target.value
    });
  }

  handleSubmit(event) {
    const { searchLocation } = this.props;
    event.preventDefault();
    searchLocation(this.state.value)
      .then(res => {
        this.setState({
          coords: `${res.results[0].geometry.lat}, ${res.results[0].geometry.lng}`,
          value: ''
        })
      })
  }

  render() {
    console.log("WeatherApp props", this.props);
    return (
      <div>
        <Navbar changeUnits={this.changeUnits}/>
        <main>
          <form onSubmit={this.handleSubmit}>
            <input type="text" onChange={this.handleChange} />
          </form>
          <h1>What's the weather?</h1>
          <ApiDarkSky coords={this.state.coords} units={this.state.units}/>
        </main>
      </div>
    );
  }
}

export default WeatherApp;