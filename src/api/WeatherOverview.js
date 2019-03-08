import React from 'react';
import Skycons from 'react-skycons';
import '../index.css';

function WeatherOverview(props) {
  const { weather } = props;

  if (props.isLoaded) {
    return (
      <section className="weatherBox">
        <h2>{weather.currently.temperature.toFixed(1)}°</h2>
        <Skycons
        icon={weather.currently.icon.toUpperCase().replace('-', '_')}
        style={{}}
        width="64px"
        height="64px"
        />
        <p>{weather.currently.summary}</p>
      </section>
    )
  }
  return <p>Loading...</p>
}

export default WeatherOverview;