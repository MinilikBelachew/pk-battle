import { call, put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';
import {
  getprofileRequest,
  getProfileSucess,
  getProfileFailure,
  updateProfleRequest,
  updateProfileSuccess,
  updateProfileFailure,
  deleteProfleRequest,
  deleteProfileSuccess,
  deleteProfileFailure,
} from '../slice/profile';

// Helper function to get base URL
const getBaseUrl = () => {
  const apiKey = import.meta.env.VITE_API_URL || 'http://localhost:3000/';
  return apiKey.endsWith('/') ? apiKey : apiKey + '/';
};

// Get profile saga
function* getProfileSaga(): Generator<any, void, any> {
  try {
    const baseUrl = getBaseUrl();
    console.log('Fetching profile with API:', `${baseUrl}api/user/profile`);
    
    const response = yield call(axios.get, `${baseUrl}api/user/profile`, {
      withCredentials: true,
    });

    if (response.data.success) {
      yield put(getProfileSucess(response.data.user));
    } else {
      yield put(getProfileFailure(response.data.message || 'Failed to fetch profile'));
    }
  } catch (error: any) {
    console.error('Profile fetch error:', error);
    const errorMessage = error.response?.data?.message || 'Failed to fetch profile';
    yield put(getProfileFailure(errorMessage));
  }
}

// Update profile saga
function* updateProfileSaga(action: ReturnType<typeof updateProfleRequest>): Generator<any, void, any> {
  try {
    const baseUrl = getBaseUrl();
    console.log('Updating profile with API:', `${baseUrl}api/user/profile`);
    
    const formData = new FormData();
    
    // Add fields to FormData if they exist
    if (action.payload.email) formData.append('email', action.payload.email);
    if (action.payload.phone) formData.append('phone', action.payload.phone);
    if (action.payload.avatarFile) formData.append('avatar', action.payload.avatarFile);

    const response = yield call(axios.put, `${baseUrl}api/user/profile`, formData, {
      withCredentials: true,
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });

    if (response.data.success) {
      yield put(updateProfileSuccess(response.data.user));
    } else {
      yield put(updateProfileFailure(response.data.message || 'Failed to update profile'));
    }
  } catch (error: any) {
    console.error('Profile update error:', error);
    const errorMessage = error.response?.data?.message || 'Failed to update profile';
    yield put(updateProfileFailure(errorMessage));
  }
}

// Delete profile saga
function* deleteProfileSaga(): Generator<any, void, any> {
  try {
    const baseUrl = getBaseUrl();
    console.log('Deleting profile with API:', `${baseUrl}api/user/profile`);
    
    const response = yield call(axios.delete, `${baseUrl}api/user/profile`, {
      withCredentials: true,
    });

    if (response.data.success) {
      yield put(deleteProfileSuccess({ user: null }));
    } else {
      yield put(deleteProfileFailure(response.data.message || 'Failed to delete profile'));
    }
  } catch (error: any) {
    console.error('Profile deletion error:', error);
    const errorMessage = error.response?.data?.message || 'Failed to delete profile';
    yield put(deleteProfileFailure(errorMessage));
  }
}

// Watcher sagas
function* watchGetProfileSaga(): Generator<any, void, any> {
  yield takeLatest(getprofileRequest.type, getProfileSaga);
}

function* watchUpdateProfileSaga(): Generator<any, void, any> {
  yield takeLatest(updateProfleRequest.type, updateProfileSaga);
}

function* watchDeleteProfileSaga(): Generator<any, void, any> {
  yield takeLatest(deleteProfleRequest.type, deleteProfileSaga);
}

export function* profileSaga(): Generator<any, void, any> {
  yield call(watchGetProfileSaga);
  yield call(watchUpdateProfileSaga);
  yield call(watchDeleteProfileSaga);
}
