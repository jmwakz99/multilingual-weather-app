import { useCallback, useEffect, useState } from 'react';

import { weatherService } from '../services/weatherService';
import { notification } from '../utils/notification';

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
        lat: -1.286389,
        lon: 36.817223,
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
