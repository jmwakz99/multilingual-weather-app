import React from 'react';

import classes from './index.module.css';
import WeatherInfo from '../../molecules/WeatherInfo';

interface IProps {
  feelsLike: number;
  humidity: number;
  wind: number;
  pressure: number;
}

const WeatherBody: React.FC<IProps> = props => {
  const { feelsLike = 0, humidity = 0, wind = 0, pressure = 0 } = props;
  return (
    <div className={classes['weather-body']}>
      <WeatherInfo feelsLike={feelsLike} />
      <WeatherInfo humidity={humidity} />
      <WeatherInfo wind={wind} />
      <WeatherInfo pressure={pressure} />
    </div>
  );
};

export default WeatherBody;
