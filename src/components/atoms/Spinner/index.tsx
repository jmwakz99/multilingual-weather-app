import React from 'react';
import { SpinnerRoundFilled } from 'spinners-react';

import classes from './index.module.css';

const Spinner = () => {
  return (
    <div className={classes.spinnerContainer}>
      <SpinnerRoundFilled size={50} />
      Loading...
    </div>
  );
};

export default Spinner;
