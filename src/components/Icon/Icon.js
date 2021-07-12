import React from 'react';
import './Icon.css';

import Sunny from '../../assets/sunny.png';
import Cloudy from '../../assets/cloudy.png';
import Rainy from '../../assets/rainy.png';
import Snowy from '../../assets/snowy.png';
import Storm from '../../assets/storm.png';

function Icon(props) {
  switch (props.icon) {
    case 'Sunny':
      return <img className="icon" src={Sunny} alt={Sunny} />;
    case 'Cloudy':
      return <img className="icon" src={Cloudy} alt={Cloudy} />;
    case 'Rainy':
      return <img className="icon" src={Rainy} alt={Rainy} />;
    case 'Snowy':
      return <img className="icon" src={Snowy} alt={Snowy} />;
    case 'Storm':
      return <img className="icon" src={Storm} alt={Storm} />;
  }
}
export default Icon;
