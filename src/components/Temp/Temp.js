import React from 'react';
import './Temp.css';

function Temp(props) {
  return (
    <div className="Temp">
      <span className="min">{props.minTemp}&#176;C</span>
      <span className="max">{props.maxTemp}&#176;C</span>
    </div>
  );
}

export default Temp;
