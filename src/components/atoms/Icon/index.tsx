import React from 'react';
import { BsCloudDrizzle } from 'react-icons/bs';

import classes from './index.module.css';

const Icon: React.FC = () => {
  return (
    <div className={classes['icon']}>
      <BsCloudDrizzle size={34} />
    </div>
  );
};

export default Icon;
