import { createContext } from 'react';

export const WeatherContext = createContext({
  loading: false,
  weatherDetails: {},
  onToggleLanguage: () => {},
  language: 'English',
});
