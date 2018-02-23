import {SET_LOCATION} from "../constants/action-types";

const initialState = {
  location: {
    latitude: 0.,
    longitude: 0.
  }
}

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_LOCATION:
      return { ...state, location: action.payload }
    default:
      return state
  }
}

export default rootReducer