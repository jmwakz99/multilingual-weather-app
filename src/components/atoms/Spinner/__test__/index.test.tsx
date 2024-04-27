import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import Spinner from '../index';

describe('Spinner', () => {
  test('renders spinner', () => {
    render(<Spinner />);
    const spinner = screen.getByText(/loading/i);
    expect(spinner).toBeInTheDocument();
  });

  test('spinner displays loading text', () => {
    render(<Spinner />);
    const spinnerText = screen.getByText(/loading/i);
    expect(spinnerText).toHaveTextContent('Loading...');
  });
});
