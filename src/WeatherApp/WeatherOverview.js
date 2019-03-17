import React from 'react';
import Skycons from 'react-skycons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon, faWind, faTint, faThermometerHalf } from '@fortawesome/free-solid-svg-icons';

function WeatherOverview(props) {
  const { weather } = props;
  const sunriseTime = new Date(weather.daily.data[0].sunriseTime * 1000);
  const sunriseHours = () => sunriseTime.getHours() < 10 ? `0${sunriseTime.getHours()}` : sunriseTime.getHours();
  const sunriseMinutes = () => sunriseTime.getMinutes() < 10 ? `0${sunriseTime.getMinutes()}` : sunriseTime.getMinutes();
  const sunsetTime = new Date(weather.daily.data[0].sunsetTime * 1000);
  const sunsetHours = () => sunsetTime.getHours() < 10 ? `0${sunsetTime.getHours()}` : sunsetTime.getHours();
  const sunsetMinutes = () => sunsetTime.getMinutes() < 10 ? `0${sunsetTime.getMinutes()}` : sunsetTime.getMinutes();
  const currentTime = new Date(weather.currently.time * 1000);

  return (
    <section className='weatherBox'>
      <div className='skyconBox'>
        <h2>{currentTime.toLocaleTimeString([], {hour: '2-digit', minute: '2-digit', hour12: false, timeZone: weather.timezone})}</h2>
        <Skycons
        icon={weather.currently.icon.toUpperCase().replace(/-/g, '_')}
        style={{}}
        width='64px'
        height='64px'
        color='white'
        />
      </div>
      <p><FontAwesomeIcon icon={faThermometerHalf} /> Temp: {weather.currently.temperature.toFixed(0)}°</p>
      <p><FontAwesomeIcon icon={faTint} /> Humidity: {(weather.currently.humidity * 100).toFixed(0)}%<br />
      <FontAwesomeIcon icon={faWind} /> Wind Speed: {weather.currently.windSpeed.toFixed(1)} {weather.flags.units === 'si' ? 'm/s' : 'mph'}</p>
      <p><FontAwesomeIcon icon={faSun} /> Sunrise: {sunriseHours()}:{sunriseMinutes()}<br />
      <FontAwesomeIcon icon={faMoon} /> Sunset: {sunsetHours()}:{sunsetMinutes()}</p>
      <p className='summary'>{weather.currently.summary}</p>
    </section>
  )
}

export default WeatherOverview;