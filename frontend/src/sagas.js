import { hashSync } from 'bcryptjs'
import { call, put, take, fork } from 'redux-saga/effects'
import {clearError, requestError, sendingRequest} from "./actions"
import {SIGN_UP_REQUEST} from "./actions/constants"
import {genSalt} from "./services/security"
import {signUp} from "./services/api/authentication";

export function *authorize({ email, password, isRegistering }) {
  yield put(sendingRequest(true))

  try {
    const salt = genSalt(email)
    const hash = hashSync(password, salt)
    let status

    if (isRegistering) {
      status = yield call(signUp, { email, password: hash })
    } else {
      // TODO implement sign-in api call
    }

    return status
  } finally {
    yield put(sendingRequest(false))
  }
}

export function *signUpFlow() {
  while (true) {
    const request = yield take(SIGN_UP_REQUEST)
    const { email, password } = request.credentials

    const wasSuccessful = yield call(authorize, { email, password, isRegistering: true })

    if (wasSuccessful) {
      yield put(clearError())
    } else {
      yield put(requestError('Email address is already taken'))
    }
  }
}

export default function *rootSaga() {
  yield fork(signUpFlow)
}