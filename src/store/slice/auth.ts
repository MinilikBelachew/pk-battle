import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  isAuthenticated: false,
  user: null,
  loading: false,
  error: null,
  token: null,
};

// Define the type for the payload that registerRequest will accept
interface RegisterPayload {
  email: string;
  phone: string;
  password: string;
}

interface LoginPayload {
  email?: string;
  phone?: string;
  password: string;
}

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    // The registerRequest action now expects a payload of type RegisterPayload
    registerRequest: (state, _action: PayloadAction<RegisterPayload>) => {
      state.loading = true;
      state.error = null;
      // You can now access the payload with action.payload if needed
      // const { email, phone, password } = action.payload;
    },
    // The rest of your reducers...
    registerSucess: (state, action) => {
      state.isAuthenticated = true;
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.loading = false;
    },
    registerFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
      state.user = null;
      state.token = null;
    },
    loginRequest: (state, _action: PayloadAction<LoginPayload>) => {
      state.loading = true;
      state.error = null;
    },
    loginSuccess: (state, action) => {
      state.isAuthenticated = true;
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.loading = false;
    },
    loginFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
      state.user = null;
      state.token = null;
    },
    resetPasswordRequest: (state) => {
      state.loading = true;
      state.error = null;
    },
    resetPasswordSuccess: (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.loading = false;
    },
    resetPasswordFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    logoutRequest: (state) => {
      state.loading = true;
      state.error = null;
    },
    logout(state) {
      state.isAuthenticated = false;
      state.user = null;
      state.token = null;
      state.loading = false;
      state.error = null;
    },
  },
});

export const {
  registerRequest,
  logoutRequest,
  registerSucess,
  registerFailure,
  loginRequest,
  loginSuccess,
  loginFailure,
  logout,
  resetPasswordFailure,
  resetPasswordRequest,
  resetPasswordSuccess,
} = authSlice.actions;

export const authReducer = authSlice.reducer;