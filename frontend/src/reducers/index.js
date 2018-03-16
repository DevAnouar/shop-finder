import {SET_USER_LOCATION, NEARBY_SHOPS_FETCHED} from "../actions/constants/index";
import page from "./page";
import {
  AUTHENTICATION_SUCCESSFUL, CLEAR_ERROR, CLOSE_SIGN_IN_MODAL, CLOSE_WELCOME_MODAL, OPEN_SIGN_IN_MODAL,
  OPEN_WELCOME_MODAL, PREFERRED_SHOPS_FETCHED, REQUEST_ERROR,
  SENDING_REQUEST, SIGN_OUT
} from "../actions/constants";

const initialState = {
  user: {
    currentLocation: {
      latitude: 0.,
      longitude: 0.
    },
    authenticated: false
  },
  nearbyShops: {
    shops: [],
    radiusOfSearch: 0.
  },
  preferredShops: [],
  authentication: {
    currentlySending: false,
    error: '',
    signInModalOpen: false,
    welcomeModalOpen: false
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
    case AUTHENTICATION_SUCCESSFUL:
      return {
        ...state,
        authenticated: true
      }
    case SIGN_OUT:
      return {
        ...state,
        authenticated: false
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

const preferredShops = (state = initialState.preferredShops, action = {}) => {
  switch (action.type) {
    case PREFERRED_SHOPS_FETCHED:
      const { preferredShops } = action.payload
      return preferredShops
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
    case OPEN_WELCOME_MODAL:
      return {...state, welcomeModalOpen: true}
    case CLOSE_WELCOME_MODAL:
      return {...state, welcomeModalOpen: false}
    case OPEN_SIGN_IN_MODAL:
      return {...state, signInModalOpen: true}
    case CLOSE_SIGN_IN_MODAL:
      return {...state, signInModalOpen: false}
    default:
      return state
  }
}

const reducers = { user, nearbyShops, preferredShops, page, authentication }

export default reducers
