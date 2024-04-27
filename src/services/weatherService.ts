import { ONE_CALL } from '../helpers/CONSTANTS';
import { requestHandler } from '../helpers/request';

const getWeatherDetails = (coordinates: { lat: number; lon: number }) => {
  const { lat, lon } = coordinates;

  return requestHandler.get(ONE_CALL, {
    params: {
      lat,
      lon,
    },
  });
};

export const weatherService = {
  getWeatherDetails,
};
