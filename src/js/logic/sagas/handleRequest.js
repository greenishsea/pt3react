import { call, take, put } from 'redux-saga/effects';

export function* handleRequest([api, requestActionType, successAction, failureAction]) {
  while (true) {
    const { payload } = yield take(requestActionType);
    const { res, error } = yield call(api, payload);

    if (process.env.NODE_ENV === 'development') {
      console.log('[development mode log]');
      console.log('res:');
      console.log(res);
      console.log('error:');
      console.log(error);
    }

    if (res && !error) {
      yield put(successAction(res));
    } else {
      yield put(failureAction(error));
    }
  }
}
