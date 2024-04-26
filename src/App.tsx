import React, { useMemo } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { WeatherContext } from './context/weatherContext';
import useWeather from './hooks/useWeather';
import './styles/global.css';
import Toggler from './components/atoms/Toggler';
import WeatherUnits from './components/molecules/WeatherUnits';
import WeatherHeader from './components/organisms/WeatherHeader';
import WeatherForeCast from './components/atoms/WeatherForecast';
import WeatherTemperature from './components/atoms/WeatherTemperature';

function App() {
  const { loading, weatherDetails, language, onToggleLanguage } = useWeather();

  const values = useMemo(() => {
    return {
      loading,
      weatherDetails,
      language,
      onToggleLanguage
    };
  }, [language, loading, onToggleLanguage, weatherDetails]);

  return (
    <WeatherContext.Provider value={values as any}>
      <div>
        <Toggler
          onToggleLanguage={onToggleLanguage}
          language={language as 'English' | 'Swahili'}
        />
        <WeatherUnits />

        <WeatherHeader
          onToggleLanguage={onToggleLanguage}
          language={language as 'English' | 'Swahili'}
        />
        <WeatherForeCast />
        <WeatherTemperature />
        <ToastContainer />
      </div>
    </WeatherContext.Provider>
  );
}

export default App;
