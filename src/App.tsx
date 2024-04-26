import React, { useMemo } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { IntlProvider } from 'react-intl';

import { WeatherContext } from './context/weatherContext';
import useWeather from './hooks/useWeather';
import WeatherTemplate from './components/templates/WeatherTemplate';
import Spinner from './components/atoms/Spinner';
import English from './translations/en-US.json';
import Swahili from './translations/sw-KE.json';
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
    <IntlProvider
      locale={language === 'English' ? 'en-US' : 'sw-KE'}
      messages={language === 'English' ? English : Swahili}
    >
      <WeatherContext.Provider value={values as any}>
        <ToastContainer />
        <WeatherTemplate
          onToggleLanguage={onToggleLanguage}
          language={language}
          weatherDetails={weatherDetails?.data}
        />
      </WeatherContext.Provider>
    </IntlProvider>
  );
}

export default App;
