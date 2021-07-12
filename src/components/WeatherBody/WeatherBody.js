import React from 'react';
import './WeatherBody.css';
import Days from '../Days/Days.js';
import Icon from '../Icon/Icon.js';
import Temp from '../Temp/Temp.js';

function WeatherBody(props) {
  return (
    <div className="WeatherBody card">
      <Days day={props.day} />
      <Icon icon={props.icon} />
      <Temp minTemp={props.minTemp} maxTemp={props.maxTemp} />
    </div>
  );
}

export default WeatherBody;
