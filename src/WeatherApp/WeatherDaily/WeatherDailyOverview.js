import React from 'react';

import WeatherDailyComponent from './WeatherDailyComponent';

const WeatherDaily = (props) => {
  return (
    <div className="weatherDailyContainer">
      <WeatherDailyComponent weather={props.weather}/>
    </div>
  );
}
 
export default WeatherDaily;