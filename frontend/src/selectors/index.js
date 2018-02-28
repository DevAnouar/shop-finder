import {createSelector} from "reselect";

const nonMemoizedGetUserLocation = state => state.userLocation
const nonMemoizedGetNearbyShops = state => state.nearbyShops

export const getUserLocation = createSelector(
  [nonMemoizedGetUserLocation],
  userLocation => userLocation
)

export const getNearbyShops = createSelector(
  [nonMemoizedGetNearbyShops],
  nearbyShops => nearbyShops
)