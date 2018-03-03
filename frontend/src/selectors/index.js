import { createSelector } from "reselect";
import { extractRadiusOfSearchFrom } from "../utils";
import { NEARBY_SHOPS } from "../constants/action-types";

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

export const isLoading = createSelector(
  [
    state => state.location.type,
    state => state.location.payload,
    state => state.nearbyShops
  ],
  (type, { perimeter }, { radiusOfSearch } ) => {
    if (type === NEARBY_SHOPS) return extractRadiusOfSearchFrom(perimeter) !== radiusOfSearch
  }
)