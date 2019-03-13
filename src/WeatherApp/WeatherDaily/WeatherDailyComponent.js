import React from 'react'
import WeatherTableRow from './WeatherTableRow';
import Skycons from 'react-skycons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon, faWind, faTint } from '@fortawesome/free-solid-svg-icons';

function WeatherDailyComponent(props) {
  const { weather, hour } = props;
  const { data } = weather.hourly;
  const times = [
    new Date(data[0].time * 1000),
    new Date(data[3].time * 1000),
    new Date(data[6].time * 1000),
    new Date(data[9].time * 1000),
    new Date(data[12].time * 1000),
    new Date(data[15].time * 1000),
    new Date(data[18].time * 1000),
    new Date(data[21].time * 1000)
  ]

  return(
    <table>
      <caption>Weather for the coming 24 hours</caption>
      <thead>
        <tr>
          <th scope="col">Time</th>
          <th scope="col">Sum.</th>
          <th scope="col">Temp.</th>
          {/* <th scope="col">Feels&nbsp;like</th> */}
          <th scope="col">Precip.</th>
          {/* <th scope="col">Humidity</th> */}
          <th scope="col"><FontAwesomeIcon icon={faWind} /></th>
        </tr>
      </thead>
      <tbody>
        <WeatherTableRow times={times[0]} data={data[0]} />
        <WeatherTableRow times={times[1]} data={data[3]} />
        <WeatherTableRow times={times[2]} data={data[6]} />
        <WeatherTableRow times={times[3]} data={data[9]} />
        <WeatherTableRow times={times[4]} data={data[12]} />
        <WeatherTableRow times={times[5]} data={data[15]} />
        <WeatherTableRow times={times[6]} data={data[18]} />
        <WeatherTableRow times={times[7]} data={data[21]} />
      </tbody>
    </table>
  )

  // return (
  //   <section className='weatherBox'>
  //     <div className='skyconBox'>
  //       <h2>{data[hour].temperature.toFixed(0)}°</h2>
  //       <Skycons
  //       icon={data[hour].icon.toUpperCase().replace(/-/g, '_')}
  //       style={{}}
  //       width='64px'
  //       height='64px'
  //       color='white'
  //       />
  //     </div>
  //     <p><FontAwesomeIcon icon={faTint} /> Humidity: {(weather.currently.humidity * 100).toFixed(0)}%<br />
  //     <FontAwesomeIcon icon={faWind} /> Wind Speed: {weather.currently.windSpeed} {weather.flags.units === 'si' ? 'm/s' : 'mph'}</p>
  //     <p className='summary'>{weather.currently.summary}</p>
  //   </section>
  // )
}

export default WeatherDailyComponent;