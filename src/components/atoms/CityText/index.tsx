import React from 'react';

import classes from './index.module.css';

const CityText: React.FC = () => {
  return <h1 className={classes['weather-city']}>Nairobi, Kenya</h1>;
};

export default CityText;
