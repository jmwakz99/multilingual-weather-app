import React from 'react';

import classes from './index.module.css';

const DateTimeText: React.FC = () => {
  return (
    <div className={classes['datetime-text']}>
      Friday, April 26, 2024 at 9:34 AM
    </div>
  );
};

export default DateTimeText;
