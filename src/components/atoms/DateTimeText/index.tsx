import React from 'react';

import classes from './index.module.css';

interface IProps {
  timeStamp?: string;
}

const DateTimeText: React.FC<IProps> = (props) => {
  const { timeStamp = 'Friday, April 26, 2024 at 9:06 PM' } = props;

  const validTimeStamp =
    timeStamp === 'Invalid Date'
      ? 'Friday, April 26, 2024 at 9:06 PM'
      : timeStamp;

  return <div className={classes['datetime-text']}>{validTimeStamp}</div>;
};

export default DateTimeText;
