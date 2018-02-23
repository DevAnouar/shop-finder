import { SET_LOCATION } from "../constants/action-types";

export const setLocation = location => ({
  type: SET_LOCATION,
  payload: location
})