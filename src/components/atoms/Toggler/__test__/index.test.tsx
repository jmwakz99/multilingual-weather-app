import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import Toggler from '../index';

describe('Toggler', () => {
  test('applies active class to English button when language is English', () => {
    const onToggleLanguage = jest.fn();

    render(<Toggler language="English" onToggleLanguage={onToggleLanguage} />);

    expect(screen.getByText('EN')).toHaveClass('active');
  });

  test('applies active class to Swahili button when language is Swahili', () => {
    const onToggleLanguage = jest.fn();

    render(<Toggler language="Swahili" onToggleLanguage={onToggleLanguage} />);

    expect(screen.getByText('SW')).toHaveClass('active');
  });
});
