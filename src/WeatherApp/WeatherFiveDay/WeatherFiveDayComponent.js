import React from 'react';
import Skycons from 'react-skycons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon, faWind, faTint } from '@fortawesome/free-solid-svg-icons';

function WeatherFiveDayComponent(props) {
  const { weather } = props;
  const sunriseTime = new Date(weather.sunriseTime * 1000);
  const sunriseHours = () => sunriseTime.getHours() < 10 ? `0${sunriseTime.getHours()}` : sunriseTime.getHours();
  const sunsetTime = new Date(weather.sunsetTime * 1000);

  return (
    <section className='weatherBox'>
      <div className='skyconBox'>
        <h2></h2>
        <h2>Low: {weather.temperatureLow.toFixed(0)}° High: {weather.temperatureHigh.toFixed(0)}°</h2>
        <Skycons
        icon={weather.icon.toUpperCase().replace(/-/g, '_')}
        style={{}}
        width='64px'
        height='64px'
        color='white'
        />
      </div>
      <p><FontAwesomeIcon icon={faTint} /> Humidity: {(weather.humidity * 100).toFixed(0)}%<br />
      <FontAwesomeIcon icon={faWind} /> Wind Speed: {weather.windSpeed} {/*weather.flags.units === 'si' ? 'm/s' : 'mph'*/}</p>
      <p><FontAwesomeIcon icon={faSun} /> Sunrise: {sunriseHours()}:{sunriseTime.getMinutes()}<br />
      <FontAwesomeIcon icon={faMoon} /> Sunset: {sunsetTime.getHours()}:{sunsetTime.getMinutes()}</p>
      <p className='summary'>{weather.summary}</p>
    </section>
  )
}

export default WeatherFiveDayComponent;