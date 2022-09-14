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


export const getContacts = () => APIauth.get('/contacts');

export const addContact = contact => APIauth.post('/contacts', contact);

export const deleteContact = id => APIauth.delete(`/contacts/${id}`);

export const updateContact = ({ id, name, number }) =>
  APIauth.delete(`/contacts/${id}`, {
    name,
    number,
  });
