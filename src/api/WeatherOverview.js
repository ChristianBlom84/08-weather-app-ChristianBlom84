import React from 'react';
import Skycons from 'react-skycons';
import '../index.css';

function WeatherOverview(props) {
  const { weather, isLoaded } = props;
  if (isLoaded) {
    const sunriseTime = new Date(weather.daily.data[0].sunriseTime);
    console.log(weather.daily.data[0].sunriseTime);
    console.log(sunriseTime.getHours());
  }

  if (isLoaded) {
    return (
      <section className="weatherBox">
        <div className="skyconBox">
          <h2>{weather.currently.temperature.toFixed(0)}°</h2>
          <Skycons
          icon={weather.currently.icon.toUpperCase().replace('-', '_')}
          style={{}}
          width="64px"
          height="64px"
          />
        </div>
        <p>Humidity: {weather.currently.humidity * 100}%<br />
        Wind Speed: {weather.currently.windSpeed} {weather.flags.units === 'si' ? 'm/s' : 'mph'}</p>
        <p>Sunrise: {weather.daily.data[0].sunriseTime}<br />
        Sunset: {weather.daily.data[0].sunsetTime}</p>
        <p>{weather.currently.summary}</p>
      </section>
    )
  }
  return <p>Loading...</p>
}

export default WeatherOverview;