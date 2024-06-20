import Axios, { AxiosRequestConfig } from "axios";
import { API_URL } from "../config";
// import storage from "@/utils/storage";
import storage from "../utils/storage";

interface InternalAxiosHeaders {
  [key: string]: string | undefined;
}

interface AuthAxiosRequestConfig extends AxiosRequestConfig {
  headers?: InternalAxiosHeaders;
}

function authRequestInterceptor<T = any>(config: T): T | Promise<T> {
  const token = storage.getToken();
  if (token) {
    // console.log(token);

    // Make sure to cast the config to AuthAxiosRequestConfig
    const authConfig = config as AuthAxiosRequestConfig;
    authConfig.headers = {
      ...authConfig.headers,
      authorization: `Bearer ${token}`,
      Accept: "application/json",
    };
    return authConfig as T; // Use type assertion here
  }
  const authConfig = config as AuthAxiosRequestConfig;
  authConfig.headers = {
    ...authConfig.headers,
    authorization: `Bearer asdfdsf`,
    Accept: "application/json",
  };
  return authConfig as T; // Use type assertion here
}

export const axios = Axios.create({
  baseURL: API_URL,
});

axios.interceptors.request.use(authRequestInterceptor);
