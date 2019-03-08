import React from 'react';

import WeatherOverview from './WeatherOverview';

export default class ApiDarkSky extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      apiResponse: {},
      error: null,
      isLoaded: false,
      position: null
    };

    this.apiKey = process.env.REACT_APP_DARKSKY_API_KEY;
    this.baseApiUrl = "https://api.darksky.net/forecast/";
    this.stockholm = "/59.3260668, 17.841971";
    this.options = "?units=auto"
  }

  getCurrentWeather() {
    fetch(`http://localhost:8080/${this.baseApiUrl}${this.apiKey}${this.state.position}${this.options}`)
      .then(res => {
        return res.json();
      })
      .then(weather => {
        this.setState({
          isLoaded: true,
          apiReponse: weather
        })
        if (this.state.isLoaded) {
          console.log(weather);
          console.log(this.state.apiResponse);
        }
      })
      .catch(err => {
        this.setState({
          isLoaded: true,
          error: err
        })
        console.log("Error, something went wrong" + err);
      })
  };

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(pos => {
      this.setState({
        position: `/${pos.coords.latitude}, ${pos.coords.longitude}`
      })
      console.log(pos);
      this.getCurrentWeather();
    }, error => {
      this.setState({
        position: this.stockholm
      })
      this.getCurrentWeather();
    })

    console.log(this.state.position);
  }

  render() {
    const { apiReponse, error, isLoaded } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else {
      return(
        <div>
          <h2>Dark Sky Component</h2>
          <h3>Current weather conditions in your location:</h3>
          <div>{isLoaded ? apiReponse.daily.summary : "Please allow access to your location for local weather data."}</div>
          <WeatherOverview weather={this.state.apiReponse} isLoaded={this.state.isLoaded} />
        </div>
      )
    }
  }
}