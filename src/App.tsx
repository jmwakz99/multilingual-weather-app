import React, { useMemo } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { WeatherContext } from './context/weatherContext';
import useWeather from './hooks/useWeather';
import './styles/global.css';
import WeatherTemplate from './components/templates/WeatherTemplate';

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
      <WeatherTemplate
        onToggleLanguage={onToggleLanguage}
        language={language}
      />
      <ToastContainer />
    </WeatherContext.Provider>
  );
}

export default App;
