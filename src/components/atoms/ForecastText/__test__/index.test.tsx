import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import ForecastText from '../index';

describe('ForecastText', () => {
  test('renders with default forecast text', () => {
    render(<ForecastText />);
    const forecastText = screen.getByText(/Clouds/i);
    expect(forecastText).toBeInTheDocument();
  });

  test('renders with custom forecast text', () => {
    const customForecast = 'Sunny';
    render(<ForecastText forecast={customForecast} />);
    const forecastText = screen.getByText(customForecast);
    expect(forecastText).toBeInTheDocument();
  });
});
