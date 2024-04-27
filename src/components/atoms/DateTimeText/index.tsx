import React from 'react';

import classes from './index.module.css';

interface IProps {
  timeStamp?: string;
}

const DateTimeText: React.FC<IProps> = (props) => {
  const { timeStamp = 'Friday, April 26, 2024 at 9:06 PM' } = props;

  return <div className={classes['datetime-text']}>{timeStamp}</div>;
};

export default DateTimeText;
