import { hashSync } from 'bcryptjs'
import { call, put, take, fork } from 'redux-saga/effects'
import {
  authenticationSuccessful, clearError, goHome, openWelcomeModal, requestError, sendingRequest,
  signInRequest, signOut
} from "./actions"
import {AUTHENTICATION_SUCCESSFUL, SIGN_IN_REQUEST, SIGN_OUT_REQUEST, SIGN_UP_REQUEST} from "./actions/constants"
import {genSalt} from "./services/security"
import {signIn, signUp} from "./services/api/authentication";

export function *authorize({ email, password, isRegistering }) {
  yield put(sendingRequest(true))

  try {
    const salt = genSalt(email)
    const hash = hashSync(password, salt)
    let status = {
      wasSuccessful: false,
      errorMsg: ''
    }

    if (isRegistering) {
      const wasSuccessful = yield call(signUp, { email, password: hash })
      status = wasSuccessful ?
        { ...status, wasSuccessful }
        : { ...status, errorMsg: 'Email address is already taken.' }
    } else {
      // TODO implement sign-in api call
      const response = yield call(signIn, { email, password: hash })
      status = {
        wasSuccessful: response.status === "200",
        errorMsg: response.status !== "200" ? response.message : '',
        jwt: response.status === "200" ? response.jwt : ''
      }
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

    const { wasSuccessful, errorMsg } = yield call(authorize, { email, password, isRegistering: true })

    if (wasSuccessful) {
      yield put(clearError())
      yield put(signInRequest(email, password))
      yield take(AUTHENTICATION_SUCCESSFUL)
      yield put(openWelcomeModal())
    } else {
      yield put(requestError(errorMsg))
    }
  }
}

export function *signInFlow() {
  while (true) {
    const request = yield take(SIGN_IN_REQUEST)
    const { email, password } = request.credentials

    const { wasSuccessful, errorMsg, jwt } = yield call(authorize, { email, password, isRegistering: false })

    if (wasSuccessful) {
      yield put(clearError())
      localStorage.setItem("jwt", jwt)
      yield put(authenticationSuccessful())
    } else {
      yield put(requestError(errorMsg))
    }
  }
}

export function *signOutFlow() {
  while (true) {
    yield take(SIGN_OUT_REQUEST)
    localStorage.clear()
    yield put(signOut())
    yield put(goHome())
  }
}

export default function *rootSaga() {
  yield fork(signUpFlow)
  yield fork(signInFlow)
  yield fork(signOutFlow)
}