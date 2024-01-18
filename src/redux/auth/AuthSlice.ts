import { createSlice } from '@reduxjs/toolkit';
import { refreshingUser, signUp, singIn } from './operations';
type InitialStateType = {
  user: {
    email: string | null;
    id: string | null;
    cards: [];
  };
  sid: string | null;
  token: string | null;
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
  token: null,
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
      .addCase(signUp.fulfilled, (state, { payload }) => {})
      .addCase(singIn.fulfilled, (state, { payload }) => {
        state.sid = payload.sid;
        state.token = payload.accessToken;
        state.user = payload.userData;
        state.isAuth = true;
      })
      .addCase(refreshingUser.pending, state => {
        state.isRefreshing = true;
      })
      .addCase(refreshingUser.fulfilled, (state, { payload }) => {
        state.isAuth = true;
        state.isRefreshing = false;
      })
      .addCase(refreshingUser.rejected, state => {
        state.isRefreshing = false;
      }),
});

export const authReducer = authSlice.reducer;
