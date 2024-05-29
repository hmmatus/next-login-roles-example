import Axios, { AxiosHeaders, AxiosRequestHeaders } from 'axios';

export const axiosInstance = Axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  timeout: 1000,
});

export const service = {
  get: async (url: string, headers?: AxiosRequestHeaders) => {
    return await axiosInstance.get(url, {
      headers,
    })
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        throw new Error(`${error}`);
      });
  },
  post: async <T>(url: string, data: T, headers?: AxiosHeaders) => {
    return await axiosInstance.post(url, data, {
      headers,
    })
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        throw new Error(`${error}`);
      });
  },
};