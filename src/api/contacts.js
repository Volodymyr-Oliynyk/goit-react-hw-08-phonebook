import { APIauth } from 'api/axiosAPI';

export const getContacts = () => APIauth.get('/contacts');

export const addContact = contact => APIauth.post('/contacts', contact);

export const deleteContact = id => APIauth.delete(`/contacts/${id}`);

export const updateContact = ({ id, name, number }) =>
  APIauth.delete(`/contacts/${id}`, {
    name,
    number,
  });
