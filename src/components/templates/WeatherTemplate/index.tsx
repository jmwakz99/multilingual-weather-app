import React from 'react';

import Card from '../../molecules/Card';
import WeatherHeader from 'src/components/organisms/WeatherHeader';
import WeatherBody from 'src/components/organisms/WeatherBody';
import CityText from 'src/components/atoms/CityText';
import DateTimeText from 'src/components/atoms/DateTimeText';
import ForeCastText from 'src/components/atoms/ForecastText';
import Icon from 'src/components/atoms/Icon';
import TemperatureText from 'src/components/atoms/TemperatureText';
import MiniMaxText from 'src/components/atoms/MiniMaxText';

interface IProps {
  onToggleLanguage: React.Dispatch<React.SetStateAction<'English' | 'Swahili'>>;
  language: 'English' | 'Swahili';
}

const WeatherTemplate: React.FC<IProps> = props => {
  const { onToggleLanguage, language = 'English' } = props;
  return (
    <Card>
      <WeatherHeader onToggleLanguage={onToggleLanguage} language={language} />
      <center>
        <CityText />
        <DateTimeText />
        <ForeCastText />
        <Icon />
        <TemperatureText />
        <MiniMaxText />
      </center>
      <WeatherBody />
    </Card>
  );
};

export default WeatherTemplate;
