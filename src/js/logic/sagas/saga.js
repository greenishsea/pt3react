import { call, fork, take, put, delay, takeEvery } from 'redux-saga/effects';
import { handleRequestEntries } from './sagaEntries';
import { handleRequest } from './handleRequest';

export default function* rootSaga() {
  for (let entry of handleRequestEntries) {
    yield fork(handleRequest, entry);
  }
}
