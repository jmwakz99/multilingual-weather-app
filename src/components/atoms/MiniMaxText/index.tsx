import React from 'react';

import classes from './index.module.css';

const MiniMaxText: React.FC = () => {
  return (
    <div className={classes['minmax-text']}>
      <p>
        Min: 7<sup>o</sup>
      </p>
      <p>
        Max: 9<sup>o</sup>
      </p>
    </div>
  );
};

export default MiniMaxText;
