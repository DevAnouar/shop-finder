import {SET_USER_LOCATION, NEARBY_SHOPS_FETCHED} from "../actions/constants/index";
import page from "./page";

const initialState = {
  user: {
    currentLocation: {
      latitude: 0.,
      longitude: 0.
    },
    email: null,
    password: null
  },
  nearbyShops: {
    shops: [],
    radiusOfSearch: 0.
  }
}

const user = (state = initialState.user, action) => {
  switch (action.type) {
    case SET_USER_LOCATION:
      return {
        ...state,
        currentLocation: {
          latitude: action.payload.latitude,
          longitude: action.payload.longitude
        }
      }
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

const reducers = { user, nearbyShops, page }

export default reducers
