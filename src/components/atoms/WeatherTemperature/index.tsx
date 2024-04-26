import React from 'react';

import classes from './index.module.css';

const WeatherTemperature: React.FC = () => {
  return (
    <div className={classes['weather-temperature']}>
      8<sup>o</sup>
    </div>
  );
};

export default WeatherTemperature;
