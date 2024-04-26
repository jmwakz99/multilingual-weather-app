import React from 'react';

import classes from './index.module.css';

const WeatherInfo: React.FC = () => {
  return (
    <div className={classes['weather-info']}>
      <div className={classes['weather-card']}>
        <span>icon</span>
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
