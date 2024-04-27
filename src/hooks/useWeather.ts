import { useCallback, useEffect, useState } from 'react';

import { weatherService } from '../services/weatherService';
import { notification } from '../utils/notification';
import { LAT, LON } from '../helpers/CONSTANTS';

const useWeather = () => {
  const [weatherDetails, setWeatherDetails] = useState<any>({});
  const [loading, setLoading] = useState<boolean>(true);
  const [language, onToggleLanguage] = useState<'English' | 'Swahili'>(
    'English'
  );

  const fetchWeatherDetails = useCallback(async () => {
    setLoading(true);

    try {
      const weatherDetails = await weatherService.getWeatherDetails({
        lat: LAT,
        lon: LON,
      });

      setWeatherDetails(weatherDetails);
    } catch (error) {
      notification('Failed to fetch weather details', 'error');
    }

    setLoading(false);
  }, []);

  useEffect(() => {
    fetchWeatherDetails();
  }, [fetchWeatherDetails]);

  return {
    weatherDetails,
    loading,
    language,
    onToggleLanguage,
  };
};

export default useWeather;
