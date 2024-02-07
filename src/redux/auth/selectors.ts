import { createSelector } from '@reduxjs/toolkit';
import { RootState } from 'redux/store';

export const isAuthSelector = (state: RootState) => state.auth.isAuth;
export const refreshingUserSelector = (state: RootState) =>
  state.auth.isRefreshing;

const accessTokenSelector = (state: RootState) => state.auth.accessToken;
const refreshTokenSelector = (state: RootState) => state.auth.refreshToken;

export const tokens = createSelector(
  accessTokenSelector,
  refreshTokenSelector,
  (a, b) => {
    return {
      accessToken: a,
      refreshToken: b,
    };
  }
);
