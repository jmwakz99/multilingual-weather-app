import React from 'react';

import CityText from '../../atoms/CityText';
import DateTimeText from '../../atoms/DateTimeText';
import ForeCastText from '../../atoms/ForecastText';
import Icon from '../../atoms/Icon';
import TemperatureText from '../../atoms/TemperatureText';
import MiniMaxText from '../../atoms/MiniMaxText';
import Card from '../../molecules/Card';
import WeatherHeader from '../../organisms/WeatherHeader';
import WeatherInfo from '../../organisms/WeatherInfo';
import {
  convertCountryCodeToName,
  convertTimeStamp,
} from '../../../utils/helpers';

interface IProps {
  onToggleLanguage: React.Dispatch<React.SetStateAction<'English' | 'Swahili'>>;
  language?: 'English' | 'Swahili';
  weatherDetails: any;
}

const WeatherTemplate: React.FC<IProps> = (props) => {
  const { onToggleLanguage, language = 'English', weatherDetails } = props;

  const locale = language === 'English' ? 'en-US' : 'sw-KE';
  const timeStamp = convertTimeStamp(
    weatherDetails?.dt,
    weatherDetails?.timezone,
    locale
  );

  const cityText = `${weatherDetails?.name || 'Nairobi'}, ${convertCountryCodeToName(
    weatherDetails?.sys?.country || 'KE'
  )}`;

  return (
    <Card>
      <WeatherHeader onToggleLanguage={onToggleLanguage} language={language} />
      <center>
        <CityText cityText={cityText} />
        <DateTimeText timeStamp={timeStamp} />
        <ForeCastText forecast={weatherDetails?.weather[0]?.main} />
        <Icon weatherIcon={weatherDetails?.weather[0]?.icon} />
        <TemperatureText temp={weatherDetails?.main?.temp} />
        <MiniMaxText
          minTemp={weatherDetails?.main?.temp_min}
          maxTemp={weatherDetails?.main?.temp_max}
        />
      </center>
      <WeatherInfo
        feelsLike={weatherDetails?.main?.feels_like}
        humidity={weatherDetails?.main?.humidity}
        wind={weatherDetails?.wind?.speed}
        pressure={weatherDetails?.main?.pressure}
      />
    </Card>
  );
};

export default WeatherTemplate;
