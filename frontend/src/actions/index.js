import {
  AUTHENTICATION_SUCCESSFUL,
  CLEAR_ERROR, CLOSE_WELCOME_MODAL, HOME, NEARBY_SHOPS, OPEN_WELCOME_MODAL, REQUEST_ERROR, SENDING_REQUEST,
  SET_USER_LOCATION,
  SIGN_IN_REQUEST, SIGN_OUT, SIGN_OUT_REQUEST, SIGN_UP_REQUEST
} from "./constants";

export const setUserLocation = (latitude, longitude) => ({
  type: SET_USER_LOCATION,
  payload: {
    latitude,
    longitude
  }
})

export const sendingRequest = sending => ({
  type: SENDING_REQUEST,
  sending
})

export const requestError = (errorMessage) => ({
  type: REQUEST_ERROR,
  error: errorMessage
})

export const clearError = () => ({
  type: CLEAR_ERROR
})

export const signUpRequest = (email, password) => ({
  type: SIGN_UP_REQUEST,
  credentials: {
    email,
    password
  }
})

export const signInRequest = (email, password) => ({
  type: SIGN_IN_REQUEST,
  credentials: {
    email,
    password
  }
})

export const signOutRequest = () => ({
  type: SIGN_OUT_REQUEST
})

export const signOut = () => ({
  type: SIGN_OUT
})

export const authenticationSuccessful = () => ({
  type: AUTHENTICATION_SUCCESSFUL
})

export const openWelcomeModal = () => ({
  type: OPEN_WELCOME_MODAL
})

export const closeWelcomeModal = () => ({
  type: CLOSE_WELCOME_MODAL
})

export const goToNearbyShops = (centerLatitude, centerLongitude, radius) => ({
  type: NEARBY_SHOPS,
  payload: {
    perimeter: `@${centerLatitude},${centerLongitude},${radius}`
  }
})

export const goHome = () => ({
  type: HOME
})