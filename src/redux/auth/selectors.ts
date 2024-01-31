import { RootState } from 'redux/store';

export const isAuthSelector = (state: RootState) => state.auth.isAuth;
export const refreshingUserSelector = (state: RootState) =>
  state.auth.isRefreshing;

export const tokens = (state: RootState) => {
  return {
    accessToken: state.auth.accessToken,
    refreshToken: state.auth.refreshToken,
  };
};
