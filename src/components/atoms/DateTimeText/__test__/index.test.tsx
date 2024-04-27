import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import DateTimeText from '../index';

describe('DateTimeText', () => {
  test('renders default date time text', () => {
    render(<DateTimeText timeStamp="Friday, April 26, 2024 at 9:06 PM" />);
    const dateTimeText = screen.getByText(/Friday, April 26, 2024 at 9:06 PM/i);
    expect(dateTimeText).toBeInTheDocument();
  });
  test('renders custom date time text', () => {
    const customTimeStamp = 'Monday, January 1, 2023 at 12:00 AM';
    render(<DateTimeText timeStamp={customTimeStamp} />);
    const dateTimeText = screen.getByText(customTimeStamp);
    expect(dateTimeText).toBeInTheDocument();
  });
});
