import axios from 'axios';

import { BASE_URL } from 'constants/constants';

export const APIauth = axios.create({
  baseURL: BASE_URL,
});

export const token = {
  set(token) {
    APIauth.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    APIauth.defaults.headers.common.Authorization = '';
  },
};
