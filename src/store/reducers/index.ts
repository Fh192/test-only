import { authSlice } from './authSlice';

export const rootReducer = {
  [authSlice.name]: authSlice.reducer,
};
