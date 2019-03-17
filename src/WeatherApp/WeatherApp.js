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
      coords: '59.3260668, 17.841971',
      locationName: 'Stockholm, Sweden',
      error: null
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
    debugger;
    const { searchLocation } = this.props;
    event.preventDefault();
    this.setState({
      error: null
    });

    searchLocation(this.state.value)
      .then(res => {
        if(res.results.length !== 0) {
          this.setState({
            coords: `${res.results[0].geometry.lat}, ${res.results[0].geometry.lng}`,
            value: '',
            locationName: res.results[0].formatted
          });
        } else {
          this.setState({
            error: `${this.state.value} not found.`,
            value: ''
          });
        }
      });
  }

  componentDidMount() {
    const { getLocationName } = this.props;

    navigator.geolocation.getCurrentPosition(pos => {
      getLocationName(pos.coords.latitude, pos.coords.longitude)
        .then(res => {
          this.setState({
            locationName: res.results[0].formatted
          });
        });
      this.setState({
        position: `${pos.coords.latitude}, ${pos.coords.longitude}`
      })
    }, error => {
      this.setState({
        error: 'Please allow access to your location or use the search field.'
      })
    })
  }

  render() {
    const { error, value } = this.state;
    return (
      <div>
        <Navbar changeUnits={this.changeUnits} handleSubmit={this.handleSubmit} handleChange={this.handleChange} />
        <main>
          <form className="locationForm" onSubmit={this.handleSubmit}>
            <input type="text" value={value} onChange={this.handleChange} placeholder="search for a location..." />
            <button type="submit">Search</button>
          </form>
          {error ? (<div className="error"><p>{error}</p></div>) : null}
          <h2>{this.state.locationName}</h2>
          <ApiDarkSky coords={this.state.coords} units={this.state.units}/>
        </main>
      </div>
    );
  }
}

export default WeatherApp;