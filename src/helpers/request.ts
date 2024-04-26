import axios, { AxiosError } from 'axios';

import { RequestConfig } from '../types';
import { notification } from '../utils/notification';

export const generateUserFriendlyMessage = (error: {
  response: { status: number };
}) => {
  if (axios.isAxiosError(error) && error.response) {
    switch (error.response.status) {
      case 400:
        return 'It seems there was an error in your request. Please check and try again.';
      case 403:
        return 'Access to this resource is restricted. Please check if you have the correct URL or access rights.';
      case 404:
        return 'The resource you tried to access was not found.';
      case 500:
        return "We're experiencing server issues. Please try again later.";
      default:
        return 'An unexpected error occurred. Please try again later.';
    }
  } else {
    return 'There was a problem connecting to the service. Please check your internet connection and try again.';
  }
};

const isHandlerEnabled = (config: RequestConfig) => {
  return 'handlerEnabled' in config && !config.handlerEnabled ? false : true;
};

export const coreRequestHandler = (request: RequestConfig): RequestConfig => {
  if (isHandlerEnabled(request)) {
    if (!request.params?.appid) {
      request.params = {
        ...request.params,
        appid: process.env.REACT_APP_API_KEY
      };
    }
    request.headers.Accept = 'application/json';
    request.headers['Content-Type'] = 'application/json';

    return request;
  }
  return request;
};

const errorHandler = (error: AxiosError) => {
  if (isHandlerEnabled(error.config as RequestConfig)) {
    const errorMessage = generateUserFriendlyMessage(error as any);
    notification(errorMessage, 'error');
  }
};

const requestHandler = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL
});

requestHandler.interceptors.request.use(
  request => coreRequestHandler(request as RequestConfig) as any,
  error => Promise.reject(error as any)
);

requestHandler.interceptors.response.use(
  response => response,
  (error: AxiosError) => errorHandler(error)
);
export { requestHandler };
