import React from 'react';
import { FaTemperatureThreeQuarters } from 'react-icons/fa6';

import classes from './index.module.css';

const WeatherInfo: React.FC = () => {
  return (
    <div className={classes['weather-info']}>
      <div className={classes['weather-card']}>
        <span>
          <FaTemperatureThreeQuarters size={24} />
        </span>
        <div>
          <p>Reel Feel</p>
          <p className={classes['weather-reel-feel']}>
            9<sup>o</sup>
          </p>
        </div>
      </div>
    </div>
  );
};

export default WeatherInfo;
