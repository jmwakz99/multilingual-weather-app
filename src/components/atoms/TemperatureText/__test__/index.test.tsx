import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import TemperatureText from '../index';

describe('TemperatureText', () => {
  test('renders with default temp of 15', () => {
    render(<TemperatureText />);
    const text = screen.getByText('15°');
    expect(text).toBeInTheDocument();
  });

  test('renders passed temp value', () => {
    render(<TemperatureText temp={32} />);
    const text = screen.getByText('32°');
    expect(text).toBeInTheDocument();
  });

  test('renders very high temp value', () => {
    render(<TemperatureText temp={1000} />);
    const text = screen.getByText('1000°');
    expect(text).toBeInTheDocument();
  });

  test('renders very low temp value', () => {
    render(<TemperatureText temp={-40} />);
    const text = screen.getByText('-40°');
    expect(text).toBeInTheDocument();
  });
});
