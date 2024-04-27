import React from 'react';

import WeatherCard from '../../molecules/WeatherCard';
import classes from './index.module.css';

interface IProps {
  feelsLike?: number;
  humidity?: number;
  wind?: number;
  pressure?: number;
}

const WeatherBody: React.FC<IProps> = (props) => {
  const { feelsLike = 10, humidity = 30, wind = 15, pressure = 5 } = props;
  return (
    <div className={classes['weather-info']}>
      <WeatherCard feelsLike={feelsLike} humidity={0} wind={0} pressure={0} />
      <WeatherCard feelsLike={0} humidity={humidity} wind={0} pressure={0} />
      <WeatherCard feelsLike={0} humidity={0} wind={wind} pressure={0} />
      <WeatherCard
        feelsLike={feelsLike}
        humidity={humidity}
        wind={wind}
        pressure={pressure}
      />
    </div>
  );
};

export default WeatherBody;
