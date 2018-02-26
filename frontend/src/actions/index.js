import {SET_USER_LOCATION, SET_NEARBY_SHOPS} from "../constants/action-types";

export const setUserLocation = userLocation => ({
  type: SET_USER_LOCATION,
  payload: userLocation
})

export const setNearbyShops = nearbyShops => ({
  type: SET_NEARBY_SHOPS,
  payload: nearbyShops
})