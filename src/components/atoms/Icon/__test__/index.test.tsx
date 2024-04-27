import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import Icon from '../index';

describe('Icon', () => {
  test('renders with default icon', () => {
    render(<Icon />);
    const icon = screen.getByAltText(/Weather Icon/i);
    expect(icon).toBeInTheDocument();
    expect(icon).toHaveAttribute(
      'src',
      'http://openweathermap.org/img/wn/04n@4x.png'
    );
  });

  test('renders with custom icon', () => {
    render(<Icon weatherIcon="01d" />);
    const icon = screen.getByAltText(/Weather Icon/i);
    expect(icon).toBeInTheDocument();
    expect(icon).toHaveAttribute(
      'src',
      'http://openweathermap.org/img/wn/01d@4x.png'
    );
  });
});
