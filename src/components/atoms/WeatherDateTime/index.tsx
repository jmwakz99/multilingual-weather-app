import React from 'react';

import classes from './index.module.css';

const WeatherDateTime: React.FC = () => {
  return (
    <div className={classes['weather-datetime']}>
      Friday, April 26, 2024 at 9:34 AM
    </div>
  );
};

export default WeatherDateTime;
