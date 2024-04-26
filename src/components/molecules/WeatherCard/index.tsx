import React from 'react';
import { FaTemperatureThreeQuarters } from 'react-icons/fa6';
import { WiHumidity } from 'react-icons/wi';
import { LuWind } from 'react-icons/lu';
import { IoSpeedometerOutline } from 'react-icons/io5';
import { FormattedMessage } from 'react-intl';

import classes from './index.module.css';

interface IProps {
  feelsLike?: number;
  humidity?: number;
  wind?: number;
  pressure?: number;
}

const WeatherInfo: React.FC<IProps> = props => {
  const { feelsLike = 0, humidity = 0, wind = 0, pressure = 0 } = props;
  let title = feelsLike ? 'Real Feel' : 'Humidity';
  title = wind ? 'Wind' : title;
  title = pressure ? 'Pressure' : title;

  let value = feelsLike ? feelsLike : humidity;
  value = wind ? wind : value;
  value = pressure ? pressure : value;

  let icon = feelsLike ? (
    <FaTemperatureThreeQuarters size={24} />
  ) : (
    <WiHumidity size={35} />
  );
  icon = wind ? <LuWind size={24} /> : icon;
  icon = pressure ? <IoSpeedometerOutline size={24} /> : icon;

  return (
    <div className={classes['weather-card']}>
      <span>{icon}</span>
      <div>
        <p>
          <FormattedMessage id={title} defaultMessage={title} />
        </p>
        <p className={classes['weather-reel-feel']}>
          {value}
          &#176;
        </p>
      </div>
    </div>
  );
};

export default WeatherInfo;
