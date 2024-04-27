import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import CityText from '../index';

describe('CityText', () => {
  test('renders city text', () => {
    render(<CityText cityText="London, UK" />);
    const cityText = screen.getByText(/London, UK/i);
    expect(cityText).toBeInTheDocument();
  });
});
