import axios from "axios";
import type { InternalAxiosRequestConfig, AxiosError } from "axios";
import { getSession } from "next-auth/react";

const API_URL = `${process.env.NEXT_PUBLIC_API_URL}`;

export const RRaxios = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

RRaxios.interceptors.request.use(
  async (config: InternalAxiosRequestConfig) => {
    const session = await getSession();
    const token = session?.accessToken;

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error: AxiosError) => {
    return Promise.reject(error);
  }
);
