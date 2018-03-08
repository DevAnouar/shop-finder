import { all } from 'redux-saga/effects'

function *signUp() {
  console.log("sign up")
}

export default function *rootSaga() {
  yield all([
    signUp()
  ])
}