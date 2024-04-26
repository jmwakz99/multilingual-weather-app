import React from 'react';

import Card from '../../molecules/Card';
import WeatherHeader from 'src/components/organisms/WeatherHeader';
import WeatherBody from 'src/components/organisms/WeatherBody';

interface IProps {
  onToggleLanguage: React.Dispatch<React.SetStateAction<'English' | 'Swahili'>>;
  language: 'English' | 'Swahili';
}

const WeatherTemplate: React.FC<IProps> = props => {
  const { onToggleLanguage, language = 'English' } = props;
  return (
    <Card>
      <WeatherHeader onToggleLanguage={onToggleLanguage} language={language} />
      <WeatherBody />
    </Card>
  );
};

export default WeatherTemplate;
