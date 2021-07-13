import React from 'react';
import './Icon.css';

import Storm from '../../assets/storm.png';
import Rainy from '../../assets/rainy.png';
import Sunny from '../../assets/sunny.png';
import Cloudy from '../../assets/cloudy.png';
import Snowy from '../../assets/snowy.png';

import Thermometer from '../../assets/thermometer.png';

function Icon(props) {
  switch (props.icon) {
    // THUNDERSTORM
    case 200:
      return <img className="icon" src={Storm} alt={Storm} />;
    case 201:
      return <img className="icon" src={Storm} alt={Storm} />;
    case 202:
      return <img className="icon" src={Storm} alt={Storm} />;
    case 230:
      return <img className="icon" src={Storm} alt={Storm} />;
    case 231:
      return <img className="icon" src={Storm} alt={Storm} />;
    case 232:
      return <img className="icon" src={Storm} alt={Storm} />;
    case 233:
      return <img className="icon" src={Storm} alt={Storm} />;
    // RAIN
    case 300:
      return <img className="icon" src={Rainy} alt={Rainy} />;
    case 301:
      return <img className="icon" src={Rainy} alt={Rainy} />;
    case 302:
      return <img className="icon" src={Rainy} alt={Rainy} />;
    case 500:
      return <img className="icon" src={Rainy} alt={Rainy} />;
    case 501:
      return <img className="icon" src={Rainy} alt={Rainy} />;
    case 502:
      return <img className="icon" src={Rainy} alt={Rainy} />;
    // SUNNY
    case 800:
      return <img className="icon" src={Sunny} alt={Sunny} />;
    // CLOUDY
    case 801:
      return <img className="icon" src={Cloudy} alt={Cloudy} />;
    case 802:
      return <img className="icon" src={Cloudy} alt={Cloudy} />;
    case 803:
      return <img className="icon" src={Cloudy} alt={Cloudy} />;
    case 804:
      return <img className="icon" src={Cloudy} alt={Cloudy} />;
    case 805:
      return <img className="icon" src={Cloudy} alt={Cloudy} />;
    // SNOW
    case 600:
      return <img className="icon" src={Snowy} alt={Snowy} />;
    case 601:
      return <img className="icon" src={Snowy} alt={Snowy} />;
    case 602:
      return <img className="icon" src={Snowy} alt={Snowy} />;
    case 621:
      return <img className="icon" src={Snowy} alt={Snowy} />;
    case 622:
      return <img className="icon" src={Snowy} alt={Snowy} />;
    case 623:
      return <img className="icon" src={Snowy} alt={Snowy} />;
    default:
      return <img className="icon" src={Thermometer} alt={Thermometer} />;
  }
}
export default Icon;
