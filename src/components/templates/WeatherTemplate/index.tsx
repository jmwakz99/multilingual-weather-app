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
import { convertCountryCodeToName, convertTimeStamp } from 'src/utils/helpers';

interface IProps {
  onToggleLanguage: React.Dispatch<React.SetStateAction<'English' | 'Swahili'>>;
  language: 'English' | 'Swahili';
  weatherDetails: any;
}

const WeatherTemplate: React.FC<IProps> = props => {
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
      <WeatherBody
        feelsLike={weatherDetails?.main?.feels_like}
        humidity={weatherDetails?.main?.humidity}
        wind={weatherDetails?.wind?.speed}
        pressure={weatherDetails?.main?.pressure}
      />
    </Card>
  );
};

export default WeatherTemplate;
