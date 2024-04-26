import { createContext } from 'react';

export const WeatherContext = createContext({
  language: 'English',
  loading: false,
  weatherDetails: {},
  onToggleLanguage: () => {}
});
