import { AsyncThunk, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { RootState } from 'redux/store';

axios.defaults.baseURL = 'https://questify-backend.goit.global';
type User = {
  email: string;
  password: string;
};
const token = {
  setToken(token: string) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unsetToken() {
    axios.defaults.headers.common.Authorization = ' ';
  },
};

export const signUp = createAsyncThunk(
  '/auth/register',
  async (credentials: User, thunkAPI) => {
    try {
      const { data } = await axios.post('/auth/register', credentials);
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

export const logOut = createAsyncThunk('/auth/logout', async (_, thunkAPI) => {
  const state: RootState = thunkAPI.getState();
  const accessToken = state.auth.accessToken;
  try {
    token.setToken(accessToken);
    await axios.post('/auth/logout');
    token.unsetToken();
  } catch (error: any) {
    throw thunkAPI.rejectWithValue(error.massage);
  }
});

type ResponseRefresh = {
  newAccessToken: string;
  newRefreshToken: string;
  newSid: string;
};

export const refreshingUser: AsyncThunk<
  ResponseRefresh,
  void,
  { state: RootState }
> = createAsyncThunk('/refresh/user', async (_, thunkAPI) => {
  const state: RootState = thunkAPI.getState();
  const persistedToken = state.auth.refreshToken;

  if (persistedToken === null) {
    return thunkAPI.rejectWithValue('Unable to fetch user');
  }
  try {
    token.setToken(persistedToken);
    const { data } = await axios.post('/auth/refresh', {
      sid: state.auth.sid,
    });

    return data;
  } catch (error) {}
});
