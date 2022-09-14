import { APIauth } from './contacts';

export const register = user => APIauth.post(`/users/signup`, user);

export const login = user => APIauth.post(`/users/login`, user);

export const logout = () => APIauth.post(`/users/logout`);

export const userData = () => APIauth.get(`/users/current`);
