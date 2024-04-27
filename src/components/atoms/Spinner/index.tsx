import React from 'react';

import classes from './index.module.css';

const Spinner: React.FC = () => {
  return <div className={classes.spinnerContainer}>Loading...</div>;
};

export default Spinner;
