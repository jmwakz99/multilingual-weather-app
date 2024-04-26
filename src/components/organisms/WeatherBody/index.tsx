import React from 'react';

import classes from './index.module.css';
import WeatherInfo from '../../molecules/WeatherInfo';

const WeatherBody: React.FC = () => {
  return (
    <div className={classes['weather-body']}>
      <WeatherInfo />
      <WeatherInfo />
      <WeatherInfo />
    </div>
  );
};

export default WeatherBody;
