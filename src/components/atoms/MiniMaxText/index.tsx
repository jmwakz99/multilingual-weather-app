import React from 'react';
import { FormattedMessage } from 'react-intl';

import classes from './index.module.css';

interface IProps {
  minTemp: number;
  maxTemp: number;
}

const MiniMaxText: React.FC<IProps> = props => {
  const { minTemp = 0, maxTemp = 0 } = props;

  return (
    <div className={classes['minmax-text']}>
      <p>
        <FormattedMessage id="Min" defaultMessage="Min" />: {minTemp.toFixed(2)}
        &#176;
      </p>
      <p>
        <FormattedMessage id="Max" defaultMessage="Max" />: {maxTemp.toFixed(2)}
        &#176;
      </p>
    </div>
  );
};

export default MiniMaxText;
