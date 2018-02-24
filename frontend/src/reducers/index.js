import {SET_LOCATION, SET_NEARBY_SHOPS} from "../constants/action-types";
import {combineReducers} from "redux";

const initialState = {
  location: {
    latitude: 0.,
    longitude: 0.
  },
  nearbyShops: []
}

/*
const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_LOCATION:
      return { ...state, location: action.payload }
    default:
      return state
  }
}*/

const location = (state = initialState.location, action) => {
  switch (action.type) {
    case SET_LOCATION:
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

const rootReducer = combineReducers({ location, nearbyShops })

export default rootReducer