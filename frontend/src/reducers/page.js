import {NOT_FOUND} from "redux-first-router";

const components = {
  HOME: 'Home',
  NEARBY_SHOPS: 'NearbyShops',
  [NOT_FOUND]: 'NotFound'
}

export default (state = 'HOME', action = {}) =>
  components[action.type] || state

// NOTES: this is the primary reducer demonstrating how RFR replaces the need
// for React Router's <Route /> component.
