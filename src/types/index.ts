import { AxiosRequestHeaders, Method } from 'axios';

export interface RequestConfig {
  url: string;
  method?: Method;
  headers: AxiosRequestHeaders;
  data?: any;
  responseType?: ResponseType;
  timeout?: number;
  withCredentials?: boolean;
  xsrfCookieName?: string;
  xsrfHeaderName?: string;
  handlerEnabled?: boolean;
  params?: Record<string, any>;
}
