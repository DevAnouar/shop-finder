import { createSelector } from "reselect";
import { extractRadiusOfSearchFrom } from "../utils";
import { NEARBY_SHOPS } from "../actions/constants";

export const getUserLocation = state => state.user.currentLocation

export const getNearbyShops = state => state.nearbyShops

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