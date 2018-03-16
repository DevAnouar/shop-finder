import {
  AUTHENTICATION_SUCCESSFUL,
  CLEAR_ERROR, CLOSE_SIGN_IN_MODAL, CLOSE_WELCOME_MODAL, HOME, NEARBY_SHOPS, NEARBY_SHOPS_FETCHED, OPEN_SIGN_IN_MODAL,
  OPEN_WELCOME_MODAL, PREFERRED_SHOPS_FETCHED,
  REQUEST_ERROR,
  SENDING_REQUEST,
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

export const nearbyShopsFetched = (nearbyShops, radiusOfSearch) => ({
  type: NEARBY_SHOPS_FETCHED,
  payload: {
    nearbyShops,
    radiusOfSearch
  }
})

export const preferredShopsFetched = (preferredShops) => ({
  type: PREFERRED_SHOPS_FETCHED,
  payload: {
    preferredShops
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

export const openSignInModal = () => ({
  type: OPEN_SIGN_IN_MODAL
})

export const closeSignInModal = () => ({
  type: CLOSE_SIGN_IN_MODAL
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