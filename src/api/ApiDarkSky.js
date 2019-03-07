import React from 'react';

export default class ApiDarkSky extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      apiResponse: {},
      error: null,
      isLoaded: false
    };

    this.apiKey = process.env.REACT_APP_DARKSKY_API_KEY;
    this.baseApiUrl = "https://api.darksky.net/forecast/";
    this.stockholm = "/59.3260668, 17.841971";
    this.options = "?units=auto"
  }

  getCurrentWeather() {
    console.log(this.props.location);
    fetch(`http://localhost:8080/${this.baseApiUrl}${this.apiKey}${this.stockholm}${this.options}`)
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

  }

  render() {
    const { apiReponse, error, isLoaded } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else {
      return(
        <div>
          <h2>Dark Sky Component</h2>
          <button onClick={() => this.getCurrentWeather(this.stockholm)}>Check the weather in Stockholm</button>
          <div>{isLoaded ? apiReponse.daily.summary : "Press the button for weather!"}</div>
        </div>
      )
    }
  }
}