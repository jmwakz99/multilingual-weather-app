import React from 'react';

import classes from './index.module.css';

const WeatherUnits: React.FC = () => {
  return (
    <div className={classes['weather-units']}>
      <span>&#8451;</span>
      <span>&#8457;</span>
    </div>
  );
};

export default WeatherUnits;
