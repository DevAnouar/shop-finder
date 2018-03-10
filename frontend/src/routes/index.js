import {extractRadiusOfSearchFrom, fetchNearbyShops} from "../utils";
import {NEARBY_SHOPS_FETCHED} from "../actions/constants";

// TODO decode url for display on address bar
const routesMap = {
  HOME: '/',
  NEARBY_SHOPS: {
    path: '/nearby/:perimeter',
    fromPath: (pathSegment) => decodeURIComponent(pathSegment),
    thunk: async (dispatch, getState) => {
      const { perimeter } = getState().location.payload
      const nearbyShops = await fetchNearbyShops(`/api/shops/nearby/${perimeter}`)
      const radiusOfSearch = extractRadiusOfSearchFrom(perimeter)

      dispatch({ type: NEARBY_SHOPS_FETCHED, payload: { nearbyShops, radiusOfSearch } })
    }
  }
}

export default routesMap