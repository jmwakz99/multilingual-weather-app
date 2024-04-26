import React, { useMemo } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { WeatherContext } from './context/weatherContext';
import useWeather from './hooks/useWeather';
import './styles/global.css';

function App() {
  const { loading, weatherDetails } = useWeather();

  const values = useMemo(() => {
    return {
      loading,
      weatherDetails
    };
  }, [loading, weatherDetails]);

  return (
    <WeatherContext.Provider value={values}>
      <div>
        <ToastContainer />
      </div>
    </WeatherContext.Provider>
  );
}

export default App;
