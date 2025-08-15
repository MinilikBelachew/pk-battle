import { all } from 'redux-saga/effects';
import { authSaga } from './saga/auth';
import { profileSaga } from './saga/profile';

export function* rootSaga() {
  yield all([
    authSaga(),
    profileSaga(),
  ]);
}