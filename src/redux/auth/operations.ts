import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { RootState } from 'redux/store';

axios.defaults.baseURL = 'https://questify-backend.goit.global';
type User = {
  email: string;
  password: string;
};
const token = {
  setToken(token: string) {
    return (axios.defaults.headers.common.Authorization = `Bearer ${token}`);
  },
  unsetToken() {
    return (axios.defaults.headers.common.Authorization = ' ');
  },
};

export const signUp = createAsyncThunk(
  '/auth/register',
  async (credentials: User, thunkAPI) => {
    try {
      const { data } = await axios.post('/auth/register', credentials);

      console.log(data);
      return data;
    } catch (error) {}
  }
);

export const singIn = createAsyncThunk(
  '/auth/login',
  async (credentials: User, thunkAPI) => {
    try {
      const { data } = await axios.post('/auth/login', credentials);
      token.setToken(data.accessToken);
      return data;
    } catch (error) {}
  }
);

export const refreshingUser = createAsyncThunk(
  '/refresh/user',
  async (_, thunkAPI) => {
    const state: RootState = thunkAPI.getState();
    const persistedToken = state.auth.token;

    if (state.auth.token === null) {
      return thunkAPI.rejectWithValue('Unable to fetch user');
    }
    try {
      token.setToken(persistedToken);
      const res = await axios.post('/auth/refresh', { sid: state.auth.sid });
      console.log(res);
    } catch (error) {}
  }
);
