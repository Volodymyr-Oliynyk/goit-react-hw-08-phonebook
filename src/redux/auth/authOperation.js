import { createAsyncThunk } from '@reduxjs/toolkit';
import { register, login, logout, userData } from 'api/auth';
import { token } from 'api/axiosAPI';
import { Notify } from 'notiflix';

export const registerUser = createAsyncThunk(
  'auth/registerUser',
  async user => {
    try {
      const data = await register(user);
      token.set(data.token);
      return data;
    } catch (error) {
      Notify.error(`Please try to use other details. ${error}`);
    }
  }
);

export const loginUser = createAsyncThunk('auth/loginUser', async user => {
  try {
    const data = await login(user);
    token.set(data.token);
    return data;
  } catch (error) {
    Notify.error(`Please try to use other details. ${error}`);
  }
});

export const logoutUser = createAsyncThunk('auth/logoutUser', async () => {
  try {
    await logout();
    token.unset();
  } catch (error) {
    Notify.error(`Please try to use other details. ${error}`);
  }
});

export const getUserData = createAsyncThunk(
  'auth/userData',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;

    if (persistedToken === null) {
      return thunkAPI.rejectWithValue();
    }
    token.set(persistedToken);
    try {
      const data = await userData();
      return data;
    } catch (error) {
      Notify.error(`Please try to use other details. ${error}`);
    }
  }
);
