import React from 'react';
import Skycons from 'react-skycons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon, faWind, faTint } from '@fortawesome/free-solid-svg-icons';
import '../index.css';

function WeatherOverview(props) {
  const { weather } = props;
  const sunriseTime = new Date(weather.daily.data[0].sunriseTime * 1000);
  console.log('Sunrise time object', sunriseTime);
  const sunriseHours = () => sunriseTime.getHours() < 10 ? `0${sunriseTime.getHours()}` : sunriseTime.getHours();
  const sunsetTime = new Date(weather.daily.data[0].sunsetTime * 1000);

  return (
    <section className='weatherBox'>
      <div className='skyconBox'>
        <h2>{weather.currently.temperature.toFixed(0)}°</h2>
        <Skycons
        icon={weather.currently.icon.toUpperCase().replace(/-/g, '_')}
        style={{}}
        width='64px'
        height='64px'
        color='white'
        />
      </div>
      <p><FontAwesomeIcon icon={faTint} /> Humidity: {weather.currently.humidity * 100}%<br />
      <FontAwesomeIcon icon={faWind} /> Wind Speed: {weather.currently.windSpeed} {weather.flags.units === 'si' ? 'm/s' : 'mph'}</p>
      <p><FontAwesomeIcon icon={faSun} /> Sunrise: {sunriseHours()}:{sunriseTime.getMinutes()}<br />
      <FontAwesomeIcon icon={faMoon} /> Sunset: {sunsetTime.getHours()}:{sunsetTime.getMinutes()}</p>
      <p className='summary'>{weather.currently.summary}</p>
    </section>
  )
}

export default WeatherOverview;