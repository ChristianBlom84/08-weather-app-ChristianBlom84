import React from 'react';
import Skycons from 'skycons';

function WeatherOverview(props) {
  const skycons = new Skycons();
  
  if (props.isLoaded) {
    return (
      <section>
        <h2>{props.weather.currently.temperature.toFixed(1)}°</h2>
        <canvas id="icon1" width="128" height="128">{skycons.add("icon1", "rain")}</canvas>
      </section>
    )
  }
  return <p>Loading...</p>
}

export default WeatherOverview;