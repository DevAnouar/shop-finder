import {SET_USER_LOCATION} from "../constants/action-types";

export const setUserLocation = userLocation => ({
  type: SET_USER_LOCATION,
  payload: userLocation
})
