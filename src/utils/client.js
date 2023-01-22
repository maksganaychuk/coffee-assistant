import axios from 'axios';

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

const authorized = axios.create();
authorized.interceptors.request.use(tokenHeaderInterceptor);
authorized.interceptors.response.use(successInterceptor, errorInterceptor);

export default {
  authorized,
};
