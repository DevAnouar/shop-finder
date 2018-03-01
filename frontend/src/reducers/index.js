import {SET_USER_LOCATION, SET_NEARBY_SHOPS, NEARBY_SHOPS_FETCHED} from "../constants/action-types";

const initialState = {
  userLocation: {
    latitude: 0.,
    longitude: 0.
  },
  nearbyShops: {
    shops: [],
    radiusOfSearch: 0.
  }
}

const userLocation = (state = initialState.userLocation, action) => {
  switch (action.type) {
    case SET_USER_LOCATION:
      return { latitude: action.payload.latitude, longitude: action.payload.longitude }
    default:
      return state
  }
}

/*
const nearbyShops = (state = initialState.nearbyShops, action) => {
  switch (action.type) {
    case SET_NEARBY_SHOPS:
      return { shops: [...action.payload.shops], radiusOfSearch: action.payload.radiusOfSearch }
    default:
      return state
  }
}
*/

const nearbyShops = (state = {}, action = {}) => {
  switch (action.type) {
    case NEARBY_SHOPS_FETCHED:
      const { nearbyShops, radiusOfSearch } = action.payload
      return { shops: [...nearbyShops], radiusOfSearch: radiusOfSearch }
    default:
      return state
  }
}

const reducers = { userLocation, nearbyShops }

export default reducers
