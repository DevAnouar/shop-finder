import {SET_USER_LOCATION, NEARBY_SHOPS_FETCHED} from "../constants/action-types";
import page from "./page";

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

const nearbyShops = (state = initialState.nearbyShops, action = {}) => {
  switch (action.type) {
    case NEARBY_SHOPS_FETCHED:
      const { nearbyShops, radiusOfSearch } = action.payload
      return { shops: [...nearbyShops], radiusOfSearch: radiusOfSearch }
    default:
      return state
  }
}

const reducers = { userLocation, nearbyShops, page }

export default reducers
