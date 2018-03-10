import {SET_USER_LOCATION, SIGN_UP_REQUEST} from "./constants";

export const setUserLocation = (latitude, longitude) => ({
  type: SET_USER_LOCATION,
  payload: {
    latitude,
    longitude
  }
})

export const signUpRequest = (email, password) => ({
  type: SIGN_UP_REQUEST,
  credentials: {
    email,
    password
  }
})