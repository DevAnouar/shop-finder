import {SET_USER_LOCATION, SET_NEARBY_SHOPS} from "../constants/action-types";

const initialState = {
  userLocation: {
    latitude: 0.,
    longitude: 0.
  },
  nearbyShops: []
}

const userLocation = (state = initialState.userLocation, action) => {
  switch (action.type) {
    case SET_USER_LOCATION:
      return { latitude: action.payload.latitude, longitude: action.payload.longitude }
    default:
      return state
  }
}

const nearbyShops = (state = initialState.nearbyShops, action) => {
  switch (action.type) {
    case SET_NEARBY_SHOPS:
      return [...action.payload]
    default:
      return state
  }
}

const reducers = { userLocation, nearbyShops }

export default reducers

/*const rootReducer = combineReducers({ userLocation, nearbyShops })

export default rootReducer*/