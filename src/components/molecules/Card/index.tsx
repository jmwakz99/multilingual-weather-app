import React from 'react';

import classes from './index.module.css';

interface IProps {
  children: React.ReactNode;
}

const Card: React.FC<IProps> = props => {
  const { children } = props;
  return <div className={classes.card}>{children}</div>;
};

export default Card;
