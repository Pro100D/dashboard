import { RootState } from 'redux/store';

export const isAuthSelector = (state: RootState) => state.auth.isAuth;
export const refreshingUserSelector = (state: RootState) =>
  state.auth.isRefreshing;
