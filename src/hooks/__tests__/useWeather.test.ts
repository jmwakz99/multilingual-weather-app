import { renderHook } from '@testing-library/react-hooks';
import { act } from '@testing-library/react';

import useWeather from '../useWeather';

describe('useWeather', () => {
  it('returns default state', () => {
    const { result } = renderHook(() => useWeather());

    expect(result.current.weatherDetails).toEqual({});
    expect(result.current.loading).toBe(true);
    expect(result.current.language).toBe('English');
  });

  it('toggles language', () => {
    const { result } = renderHook(() => useWeather());

    act(() => {
      result.current.onToggleLanguage('Swahili');
    });

    expect(result.current.language).toBe('Swahili');
  });
});
