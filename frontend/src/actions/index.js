import {SET_LOCATION, SET_NEARBY_SHOPS} from "../constants/action-types";

export const setLocation = location => ({
  type: SET_LOCATION,
  payload: location
})

export const setNearbyShops = nearbyShops => ({
  type: SET_NEARBY_SHOPS,
  payload: nearbyShops
})