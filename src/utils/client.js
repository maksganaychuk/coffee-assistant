import axios from 'axios';

const options = {
  baseURL: process.env.REACT_APP_API_BASE_URL,
};

const tokenHeaderInterceptor = config => {
  const configWithTokenHeader = {
    ...config,
    headers: {
      ...config.headers,
    },
  };

  return configWithTokenHeader;
};

const successInterceptor = response => response;

const errorInterceptor = error => Promise.reject(error);

const authorized = axios.create(options);
authorized.interceptors.request.use(tokenHeaderInterceptor);
authorized.interceptors.response.use(successInterceptor, errorInterceptor);

export default {
  authorized,
};
