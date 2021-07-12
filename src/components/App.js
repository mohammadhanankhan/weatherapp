import React from 'react';
import WeatherBody from '../components/WeatherBody/WeatherBody';

function App() {
  return (
    <div className="App">
      <div className="weatherContainer pt-3 pb-3">
        <WeatherBody day={'Mon'} icon={'Sunny'} minTemp={28} maxTemp={35} />
        <WeatherBody day={'Tue'} icon={'Cloudy'} minTemp={15} maxTemp={19} />
        <WeatherBody day={'Wed'} icon={'Snowy'} minTemp={-3} maxTemp={0} />
        <WeatherBody day={'Thu'} icon={'Storm'} minTemp={10} maxTemp={19} />
        <WeatherBody day={'Fri'} icon={'Rainy'} minTemp={16} maxTemp={22} />
      </div>
    </div>
  );
}

export default App;
