import { AsyncThunk, UnknownAction, createSlice } from '@reduxjs/toolkit';
import { logOut, refreshingUser, signUp, singIn } from './operations';
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
  isRegister: boolean;
  error: null;
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
  isRegister: false,
  error: null,
};
type GenericAsyncThunk = AsyncThunk<unknown, unknown, any>;

type PendingAction = ReturnType<GenericAsyncThunk['pending']>;
type RejectedAction = ReturnType<GenericAsyncThunk['rejected']>;

const isPendingAction = (action: UnknownAction): action is PendingAction => {
  return typeof action.type === 'string' && action.type.endsWith('/pending');
};

const isRejectedAction = (action: UnknownAction): action is RejectedAction => {
  return typeof action.type === 'string' && action.type.endsWith('/rejected');
};

const handlePending = (state: InitialStateType) => {
  state.isLoading = true;
  state.isRefreshing = true;
  state.error = null;
};

const handleRejected = (state: InitialStateType, action: UnknownAction) => {
  state.error = action.payload;
  state.isLoading = false;
  state.isRefreshing = false;
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    createNewUser: state => {
      state.isRegister = false;
    },
  },
  extraReducers: builder =>
    builder
      .addCase(signUp.fulfilled, state => {
        state.isLoading = false;
        state.isRefreshing = false;
        state.error = null;
        state.isRegister = true;
      })
      .addCase(singIn.fulfilled, (state, { payload }) => {
        state.sid = payload.sid;
        state.accessToken = payload.accessToken;
        state.refreshToken = payload.refreshToken;
        state.user = payload.userData;
        state.isAuth = true;
        state.isRefreshing = false;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(logOut.fulfilled, state => {
        state.user = initialState.user;
        state.sid = null;
        state.accessToken = null;
        state.refreshToken = null;
        state.isAuth = false;
        state.isRefreshing = false;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(refreshingUser.fulfilled, (state, { payload }) => {
        state.accessToken = payload.newAccessToken;
        state.refreshToken = payload.newRefreshToken;
        state.sid = payload.newSid;
        state.isAuth = true;
        state.isRefreshing = false;
        state.isLoading = false;
      })
      .addMatcher(isPendingAction, handlePending)
      .addMatcher(isRejectedAction, handleRejected),
});
export const { createNewUser } = authSlice.actions;
export const authReducer = authSlice.reducer;
