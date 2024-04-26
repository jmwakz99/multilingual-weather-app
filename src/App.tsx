import React, { useMemo } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { WeatherContext } from './context/weatherContext';
import useWeather from './hooks/useWeather';
import WeatherTemplate from './components/templates/WeatherTemplate';
import Spinner from './components/atoms/Spinner';
import './styles/global.css';

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

  if (loading || loading === undefined) {
    return <Spinner />;
  }

  return (
    <WeatherContext.Provider value={values as any}>
      <ToastContainer />
      <WeatherTemplate
        onToggleLanguage={onToggleLanguage}
        language={language}
        weatherDetails={weatherDetails?.data}
      />
    </WeatherContext.Provider>
  );
}

export default App;
