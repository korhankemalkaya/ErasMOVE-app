import { all } from 'redux-saga/effects';
import appSaga from './appSaga';
import authSaga from './authSaga';
import requestSaga from './requestSaga';
import universitySaga from './universitySaga';
import userSaga from './userSaga';

export default function* rootSaga() {
  yield all([
    ...appSaga,
    ...authSaga,
    ...requestSaga,
    ...universitySaga,
    ...userSaga,
  ]);
}
