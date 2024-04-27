import React from 'react';

import classes from './index.module.css';

interface IProps {
  onToggleLanguage: React.Dispatch<React.SetStateAction<'English' | 'Swahili'>>;
  language?: 'English' | 'Swahili';
}

const Toggler: React.FC<IProps> = (props) => {
  const { onToggleLanguage, language = 'English' } = props;

  const isActive = language === 'English';

  return (
    <div className={classes.toggler}>
      <button
        onClick={onToggleLanguage?.bind(this, 'English')}
        className={`${isActive && classes.active}`}
      >
        EN
      </button>
      <button
        onClick={onToggleLanguage?.bind(this, 'Swahili')}
        className={`${!isActive && classes.active}`}
      >
        SW
      </button>
    </div>
  );
};

export default Toggler;
