import { createSlice } from '@reduxjs/toolkit';
import { logOut, refreshingUser, singIn } from './operations';
type InitialStateType = {
  user: {
    email: string | null;
    id: string | null;
    cards: [];
  };
  sid: string | null;
  accessToken: string | null;
  refreshToken: string | null;
  isLoading: boolean;
  isRefreshing: boolean;
  isAuth: boolean;
};

const initialState: InitialStateType = {
  user: {
    email: null,
    id: null,
    cards: [],
  },
  sid: null,
  accessToken: null,
  refreshToken: null,
  isLoading: false,
  isRefreshing: false,
  isAuth: false,
};
const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: builder =>
    builder
      .addCase(singIn.fulfilled, (state, { payload }) => {
        state.sid = payload.sid;
        state.accessToken = payload.accessToken;
        state.refreshToken = payload.refreshToken;
        state.user = payload.userData;
        state.isAuth = true;
      })
      .addCase(logOut.fulfilled, state => {
        state.user = initialState.user;
        state.sid = null;
        state.accessToken = null;
        state.refreshToken = null;
        state.isAuth = false;
      })
      .addCase(refreshingUser.pending, state => {
        state.isRefreshing = true;
      })
      .addCase(refreshingUser.fulfilled, (state, { payload }) => {
        state.accessToken = payload.newAccessToken;
        state.refreshToken = payload.newRefreshToken;
        state.sid = payload.newSid;
        state.isAuth = true;
        state.isRefreshing = false;
      })
      .addCase(refreshingUser.rejected, state => {
        state.isRefreshing = false;
      }),
});

export const authReducer = authSlice.reducer;
