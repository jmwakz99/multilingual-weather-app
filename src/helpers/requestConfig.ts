import axios, { AxiosError, AxiosRequestConfig } from 'axios'

import { API_URL } from '../utils/CONSTANTS'

const axiosInstance = axios.create({
  baseURL: API_URL
})

axiosInstance.interceptors.response.use(
  response => response,
  (error: AxiosError) => {
    if (axios.isCancel(error)) {
      // do nothing
    }

    return Promise.reject(error)
  }
)

export const get = async <TResponse>(
  url: string,
  config?: AxiosRequestConfig
): Promise<TResponse> => {
  try {
    const response = await axiosInstance.get<TResponse>(url, config)
    return response.data
  } catch (error) {
    const message = (error as AxiosError<{ message: string }>).response?.data
      ?.message
    alert(`Error while fetching ${url}. ${message ?? ''}`)
    throw error
  }
}
