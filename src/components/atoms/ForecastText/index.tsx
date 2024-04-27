import React from 'react';

import classes from './index.module.css';

interface IProps {
  forecast?: string;
}

const ForeCastText: React.FC<IProps> = (props) => {
  const { forecast = 'Clouds' } = props;
  return <div className={classes['forecast-text']}>{forecast}</div>;
};

export default ForeCastText;
