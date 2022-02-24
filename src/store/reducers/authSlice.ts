import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { authApi } from '../../api/auth';
import { ILogin } from '../../types/auth';

const initialState = {
  email: '',
  isAuth: false,
  isLoading: false,
  error: null as string | null,
};

export const login = createAsyncThunk<string, ILogin, { rejectValue: string }>(
  'auth/login',
  async (loginData, { rejectWithValue }) => {
    try {
      const { email } = await authApi.login(loginData);

      return email;
    } catch (err) {
      let error = err as Error;

      return rejectWithValue(error.message);
    }
  }
);

export const logout = createAsyncThunk('auth/logout', async () => {
  await authApi.logout();
  localStorage.removeItem('email');
});

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setEmail: (state, action: PayloadAction<string>) => {
      state.email = action.payload;
    },
    setError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload;
    },
  },
  extraReducers: b => {
    b.addCase(login.pending, state => {
      state.isLoading = true;
    });

    b.addCase(login.rejected, (state, action) => {
      if (action.payload) {
        state.error = action.payload;
        state.isLoading = false;
      }
    });

    b.addCase(login.fulfilled, (state, action) => {
      state.email = action.payload;
      state.isAuth = true;
      state.error = null;
      state.isLoading = false;
    });

    b.addCase(logout.pending, state => {
      state.isLoading = true;
    });

    b.addCase(logout.fulfilled, () => initialState);
  },
});

export const { setEmail, setError } = authSlice.actions;
