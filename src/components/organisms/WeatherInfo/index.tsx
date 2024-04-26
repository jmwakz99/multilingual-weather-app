import React from 'react';

import classes from './index.module.css';
import WeatherCard from '../../molecules/WeatherCard';

interface IProps {
  feelsLike: number;
  humidity: number;
  wind: number;
  pressure: number;
}

const WeatherBody: React.FC<IProps> = (props) => {
  const { feelsLike = 0, humidity = 0, wind = 0, pressure = 0 } = props;
  return (
    <div className={classes['weather-info']}>
      <WeatherCard feelsLike={feelsLike} />
      <WeatherCard humidity={humidity} />
      <WeatherCard wind={wind} />
      <WeatherCard pressure={pressure} />
    </div>
  );
};

export default WeatherBody;
