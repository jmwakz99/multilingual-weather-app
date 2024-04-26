import React from 'react';

import Toggler from 'src/components/atoms/Toggler';
import WeatherUnits from 'src/components/molecules/WeatherUnits';
import classes from './index.module.css';

interface IProps {
  onToggleLanguage: React.Dispatch<React.SetStateAction<'English' | 'Swahili'>>;
  language: 'English' | 'Swahili';
}

const WeatherHeader: React.FC<IProps> = (props) => {
  const { onToggleLanguage, language = 'English' } = props;
  return (
    <div className={classes['weather-header']}>
      <Toggler onToggleLanguage={onToggleLanguage} language={language} />
      <WeatherUnits />
    </div>
  );
};

export default WeatherHeader;
