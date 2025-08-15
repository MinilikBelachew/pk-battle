import { call, put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';
import {
  registerRequest,
  registerSucess,
  registerFailure,
  loginRequest,
  loginSuccess,
  loginFailure,
  logoutRequest,
  logout,
  resetPasswordRequest,
  resetPasswordSuccess,
  resetPasswordFailure,
} from '../slice/auth';

// Helper function to get base URL
const getBaseUrl = () => {
  const apiKey = import.meta.env.VITE_API_URL || 'http://localhost:3000/';
  return apiKey.endsWith('/') ? apiKey : apiKey + '/';
};

// Registration saga
function* registerSaga(action: ReturnType<typeof registerRequest>): Generator<any, void, any> {
  try {
    const baseUrl = getBaseUrl();
    console.log('Registering user with API:', `${baseUrl}api/auth/register`);
    
    const response = yield call(axios.post, `${baseUrl}api/auth/register`, action.payload, {
      withCredentials: true,
    });

    if (response.data.success) {
      yield put(registerSucess({
        user: response.data.user,
        token: response.data.token
      }));
    } else {
      yield put(registerFailure(response.data.message || 'Registration failed'));
    }
  } catch (error: any) {
    console.error('Registration error:', error);
    const errorMessage = error.response?.data?.message || 'Registration failed';
    yield put(registerFailure(errorMessage));
  }
}

// Login saga
function* loginSaga(action: ReturnType<typeof loginRequest>): Generator<any, void, any> {
  try {
    const baseUrl = getBaseUrl();
    console.log('Logging in user with API:', `${baseUrl}api/auth/login`);
    
    const response = yield call(axios.post, `${baseUrl}api/auth/login`, action.payload, {
      withCredentials: true,
    });

    if (response.data.success) {
      yield put(loginSuccess({
        user: response.data.user,
        token: response.data.token
      }));
    } else {
      yield put(loginFailure(response.data.message || 'Login failed'));
    }
  } catch (error: any) {
    console.error('Login error:', error);
    const errorMessage = error.response?.data?.message || 'Login failed';
    yield put(loginFailure(errorMessage));
  }
}

// Logout saga
function* logoutSaga(): Generator<any, void, any> {
  try {
    const baseUrl = getBaseUrl();
    console.log('Logging out user with API:', `${baseUrl}api/auth/logout`);
    
    yield call(axios.post, `${baseUrl}api/auth/logout`, {}, {
      withCredentials: true,
    });
    
    yield put(logout());
  } catch (error: any) {
    console.error('Logout error:', error);
    // Even if the API call fails, we should still logout locally
    yield put(logout());
  }
}

// Reset password saga
function* resetPasswordSaga(action: ReturnType<typeof resetPasswordRequest>): Generator<any, void, any> {
  try {
    const baseUrl = getBaseUrl();
    console.log('Resetting password with API:', `${baseUrl}api/auth/reset-password`);
    
    const response = yield call(axios.post, `${baseUrl}api/auth/reset-password`, action.payload, {
      withCredentials: true,
    });

    if (response.data.success) {
      yield put(resetPasswordSuccess({
        user: response.data.user
      }));
    } else {
      yield put(resetPasswordFailure(response.data.message || 'Password reset failed'));
    }
  } catch (error: any) {
    console.error('Password reset error:', error);
    const errorMessage = error.response?.data?.message || 'Password reset failed';
    yield put(resetPasswordFailure(errorMessage));
  }
}

// Watcher sagas
function* watchRegisterSaga(): Generator<any, void, any> {
  yield takeLatest(registerRequest.type, registerSaga);
}

function* watchLoginSaga(): Generator<any, void, any> {
  yield takeLatest(loginRequest.type, loginSaga);
}

function* watchLogoutSaga(): Generator<any, void, any> {
  yield takeLatest(logoutRequest.type, logoutSaga);
}

function* watchResetPasswordSaga(): Generator<any, void, any> {
  yield takeLatest(resetPasswordRequest.type, resetPasswordSaga);
}

export function* authSaga(): Generator<any, void, any> {
  yield call(watchRegisterSaga);
  yield call(watchLoginSaga);
  yield call(watchLogoutSaga);
  yield call(watchResetPasswordSaga);
}