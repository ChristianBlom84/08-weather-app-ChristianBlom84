import React from 'react';

import WeatherFiveDayComponent from './WeatherFiveDayComponent';

const WeatherFiveDayOverview = (props) => {
  return (
    <div className="weatherDailyContainer">
      <WeatherFiveDayComponent weather={props.weather.daily.data[0]} units={props.weather.flags.units}/>
      <WeatherFiveDayComponent weather={props.weather.daily.data[1]} units={props.weather.flags.units}/>
      <WeatherFiveDayComponent weather={props.weather.daily.data[2]} units={props.weather.flags.units}/>
      <WeatherFiveDayComponent weather={props.weather.daily.data[3]} units={props.weather.flags.units}/>
      <WeatherFiveDayComponent weather={props.weather.daily.data[4]} units={props.weather.flags.units}/>
    </div>
  );
}
 
export default WeatherFiveDayOverview;