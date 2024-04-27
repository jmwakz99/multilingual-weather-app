import React from 'react';
import { FaTemperatureThreeQuarters } from 'react-icons/fa6';
import { WiHumidity } from 'react-icons/wi';
import { LuWind } from 'react-icons/lu';
import { IoSpeedometerOutline } from 'react-icons/io5';
import { FormattedMessage } from 'react-intl';

import classes from './index.module.css';

interface IProps {
  feelsLike: number;
  humidity: number;
  wind: number;
  pressure: number;
}

const WeatherInfo: React.FC<IProps> = (props) => {
  const { feelsLike, humidity, wind, pressure } = props;
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

  let units = feelsLike ? <span>&#176;</span> : '%';
  units = wind ? 'm/s' : units;
  units = pressure ? 'hPa' : units;

  return (
    <div className={classes['weather-card']}>
      <span>{icon}</span>
      <div>
        <p>
          <FormattedMessage id={title} defaultMessage={title} />
        </p>
        <p className={classes['weather-reel-feel']}>
          {value}
          {units}
        </p>
      </div>
    </div>
  );
};

export default WeatherInfo;
