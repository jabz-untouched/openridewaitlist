import axios, { AxiosError, InternalAxiosRequestConfig, AxiosResponse } from 'axios';

export const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL || '/api',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request interceptor
api.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    // Add auth token if available
    const token = typeof window !== 'undefined' ? localStorage.getItem('auth_token') : null;
    if (token && config.headers) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    // Log request in development
    if (process.env.NODE_ENV === 'development') {
      console.log(`[API Request] ${config.method?.toUpperCase()} ${config.url}`, config.data);
    }

    return config;
  },
  (error: AxiosError) => {
    console.error('[API Request Error]:', error);
    return Promise.reject(error);
  }
);

// Response interceptor
api.interceptors.response.use(
  (response: AxiosResponse) => {
    // Log response in development
    if (process.env.NODE_ENV === 'development') {
      console.log(`[API Response] ${response.config.url}`, response.data);
    }
    return response;
  },
  (error: AxiosError) => {
    // Handle common errors
    if (error.response) {
      const status = error.response.status;
      const message = (error.response.data as any)?.message || error.message;

      switch (status) {
        case 401:
          // Unauthorized - clear token and redirect to login
          if (typeof window !== 'undefined') {
            localStorage.removeItem('auth_token');
            // window.location.href = '/login'; // Uncomment when you have a login page
          }
          console.error('[API Error] Unauthorized:', message);
          break;
        case 403:
          console.error('[API Error] Forbidden:', message);
          break;
        case 404:
          console.error('[API Error] Not Found:', message);
          break;
        case 500:
          console.error('[API Error] Server Error:', message);
          break;
        default:
          console.error(`[API Error] ${status}:`, message);
      }
    } else if (error.request) {
      // Request made but no response received
      console.error('[API Error] No response received:', error.request);
    } else {
      // Error in request setup
      console.error('[API Error] Request setup:', error.message);
    }

    return Promise.reject(error);
  }
);
