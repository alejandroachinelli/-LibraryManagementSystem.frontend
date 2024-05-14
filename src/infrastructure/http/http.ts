import axios, { AxiosResponse } from 'axios';

const headers = {
  'Content-Type': 'application/json'
};

const axiosConfig = {
  headers
};

const axiosInstance = axios.create(axiosConfig);

const get = async <T>(url: string): Promise<T> => {
  const response: AxiosResponse<T> = await axiosInstance.get<T>(url);
  return response.data;
};

const post = async <T>(url: string, body: any): Promise<T> => {
  const response: AxiosResponse<T> = await axiosInstance.post<T>(url, body);
  return response.data;
};

const put = async <T>(url: string, body: any): Promise<T> => {
  const response: AxiosResponse<T> = await axiosInstance.put<T>(url, body);
  return response.data;
};

const _delete = async <T>(url: string): Promise<T> => {
  const response: AxiosResponse<T> = await axiosInstance.delete<T>(url);
  return response.data;
};

export const http = {
  get,
  post,
  put,
  delete: _delete
};