import { all } from 'redux-saga/effects'
import { takeEvery } from "redux-saga";

function *watcherSaga() {
  yield takeEvery("SIGN_UP_REQUEST", workerSaga)
}

function *workerSaga() {

}

export default function *rootSaga() {
  yield all([
    watcherSaga(),
    workerSaga()
  ])
}