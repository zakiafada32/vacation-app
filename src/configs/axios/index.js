import axios from 'axios';

import errorResponseHandler from './errorResponseHandler';

const instance = axios.create({
  baseURL: `${process.env.REACT_APP_H0ST}/api/v1/member`,
});

instance.interceptors.response.use(
  (response) => response,
  errorResponseHandler
);

export default instance;
