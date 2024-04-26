import React from 'react';

import classes from './index.module.css';

interface IProps {
  cityText: string;
}

const CityText: React.FC<IProps> = props => {
  const { cityText = 'Nairobi, Kenya' } = props;

  return <h1 className={classes['weather-city']}>{cityText}</h1>;
};

export default CityText;
