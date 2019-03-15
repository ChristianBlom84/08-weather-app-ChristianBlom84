import React from 'react';
import Skycons from 'react-skycons';

export default function WeatherTableRow(props) {
  const { times, data } = props;

  return (
    <tr>
      <td>{times.toLocaleTimeString([], {hour: '2-digit', minute: '2-digit', hour12: false})}</td>
      <td><Skycons
        icon={data.icon.toUpperCase().replace(/-/g, '_')}
        style={{}}
        width='32px'
        height='32px'
        color='rgba(30,87,153,1)'
        /></td>
      <td>{data.temperature.toFixed(0)}°</td>
      <td>{(data.precipProbability * 100).toFixed(0)}%</td>
      <td>{data.windSpeed.toFixed(1)}</td>
    </tr>
  )
}
