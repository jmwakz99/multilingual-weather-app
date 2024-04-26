import React from 'react';

import classes from './index.module.css';

interface IProps {
  weatherIcon: string;
}

const Icon: React.FC<IProps> = (props) => {
  const { weatherIcon = '04n' } = props;

  const imageSrc = `http://openweathermap.org/img/wn/${weatherIcon}@4x.png`;

  return (
    <div className={classes['icon']}>
      <img src={imageSrc} alt="Weather Icon" />
    </div>
  );
};

export default Icon;
