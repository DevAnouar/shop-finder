import {SET_USER_LOCATION, NEARBY_SHOPS_FETCHED} from "../actions/constants/index";
import page from "./page";
import {CLEAR_ERROR, REQUEST_ERROR, SENDING_REQUEST} from "../actions/constants";

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
  },
  authentication: {
    currentlySending: false,
    error: ''
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
      return { shops: [...nearbyShops], radiusOfSearch }
    default:
      return state
  }
}

const authentication = (state = initialState.authentication, action) => {
  switch (action.type) {
    case SENDING_REQUEST:
      const { sending } = action
      return {...state, currentlySending: sending}
    case REQUEST_ERROR:
      const { error } = action
      return {...state, error}
    case CLEAR_ERROR:
      return {...state, error: ''}
    default:
      return state
  }
}

const reducers = { user, nearbyShops, page, authentication }

export default reducers
