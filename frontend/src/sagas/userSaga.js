import { takeEvery, put, call } from 'redux-saga/effects';
import { GET_APPLICATION_FAIL, GET_APPLICATION_REQUEST, GET_APPLICATION_SUCCESS, GET_USER_FAIL, GET_USER_REQUEST, GET_USER_SUCCESS } from '../constants/actionTypes';
import { getApplication, getUser } from '../lib/api/unsplashService';

function* getUserRequest({ payload: { id, typeForReq } }) {
  console.log(`Pre approval form created `);

  try {
      // TODO: send Post request here
      const { data } = yield call(getUser, typeForReq, id);

      const status = 200;
      if (status !== 200) {
        throw Error('Accept request failed for  course approval request ');
      }

      yield put({
          type: GET_USER_SUCCESS,
          payload: data,
      });
  } catch (error) {
    yield put({
      type: GET_USER_FAIL,
      payload: error.message,
    });
  }
}

function* getApplicationRequest({ payload: { id } }) {
    console.log(`Pre approval form created `);
  
    try {
        // TODO: send Post request here
        const { data } = yield call(getApplication, id);
  
        const status = 200;
        if (status !== 200) {
          throw Error('Accept request failed for  course approval request ');
        }
  
        yield put({
            type: GET_APPLICATION_SUCCESS,
            payload: data,
        });
    } catch (error) {
      yield put({
        type: GET_APPLICATION_FAIL,
        payload: error.message,
      });
    }
  }

const universitySaga = [
  takeEvery(GET_USER_REQUEST, getUserRequest),
  takeEvery(GET_APPLICATION_REQUEST, getApplicationRequest),
];

export default universitySaga;