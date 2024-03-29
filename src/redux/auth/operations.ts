import { AsyncThunk, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import Notiflix from 'notiflix';
import { RootState } from 'redux/store';

type User = {
  email: string;
  password: string;
};
export const onSetToken = {
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
      Notiflix.Notify.warning(
        'Please enter your email address and password again to confirm',
        {
          clickToClose: true,
          timeout: 5000,
        }
      );
      return data;
    } catch (error) {
      throw thunkAPI.rejectWithValue(error.massage);
    }
  }
);

export const singIn = createAsyncThunk(
  '/auth/login',
  async (credentials: User, thunkAPI) => {
    try {
      const { data } = await axios.post('/auth/login', credentials);

      onSetToken.setToken(data.accessToken);
      return data;
    } catch (error) {
      Notiflix.Notify.failure('Incorrect username or password, try again', {
        clickToClose: true,
      });
      throw thunkAPI.rejectWithValue(error.massage);
    }
  }
);

export const logOut = createAsyncThunk('/auth/logout', async (_, thunkAPI) => {
  const state: RootState = thunkAPI.getState();
  const accessToken = state.auth.accessToken;
  try {
    onSetToken.setToken(accessToken);
    await axios.post('/auth/logout');
    onSetToken.unsetToken();
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
    onSetToken.setToken(persistedToken);
    const { data } = await axios.post('/auth/refresh', {
      sid: state.auth.sid,
    });

    return data;
  } catch (error) {}
});
