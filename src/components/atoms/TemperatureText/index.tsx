import React from 'react';

import classes from './index.module.css';

interface IProps {
  temp: number;
}

const TemperatureText: React.FC<IProps> = props => {
  const { temp = 0 } = props;
  return (
    <div className={classes['temperature-text']}>
      {temp}
      &#176;
    </div>
  );
};

export default TemperatureText;
