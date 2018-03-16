import { createSelector } from "reselect";
import { extractRadiusOfSearchFrom } from "../utils";
import { NEARBY_SHOPS } from "../actions/constants";

export const getUserLocation = state => state.user.currentLocation

export const getNearbyShops = state => state.nearbyShops

export const getRadiusOfSearch = state => state.nearbyShops.radiusOfSearch

export const isSendingRequest = state => state.authentication.currentlySending

export const getAuthenticationRequestError = state => state.authentication.error

export const isAuthenticated = state => state.user.authenticated

export const isWelcomeModalOpen = state => state.authentication.welcomeModalOpen

export const isSignInModalOpen = state => state.authentication.signInModalOpen

export const isLoading = createSelector(
  [
    state => state.location.type,
    state => state.location.payload,
    state => state.nearbyShops
  ],
  (type, { perimeter }, { radiusOfSearch } ) => {
    if (type === NEARBY_SHOPS) return extractRadiusOfSearchFrom(perimeter) !== radiusOfSearch
    return false
  }
)