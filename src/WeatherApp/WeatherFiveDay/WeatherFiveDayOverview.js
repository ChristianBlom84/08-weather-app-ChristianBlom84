import React from 'react';

import WeatherFiveDayComponent from './WeatherFiveDayComponent';

const WeatherFiveDayOverview = (props) => {
  return (
    <div className="weatherDailyContainer">
      <WeatherFiveDayComponent weather={props.weather.daily.data[0]}/>
      <WeatherFiveDayComponent weather={props.weather.daily.data[1]}/>
      <WeatherFiveDayComponent weather={props.weather.daily.data[2]}/>
      <WeatherFiveDayComponent weather={props.weather.daily.data[3]}/>
      <WeatherFiveDayComponent weather={props.weather.daily.data[4]}/>
    </div>
  );
}
 
export default WeatherFiveDayOverview;