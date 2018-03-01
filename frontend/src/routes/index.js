import {extractRadiusOfSearchFrom, fetchNearbyShops} from "../utils";
import {NEARBY_SHOPS_FETCHED} from "../constants/action-types";

const routesMap = {
  HOME: '/',
  NEARBY_SHOPS: {
    path: '/nearby/:perimeter',
    thunk: async (dispatch, getState) => {
      const { perimeter } = getState().location.payload
      const nearbyShops = await fetchNearbyShops(`/api/shops/${perimeter}`)
      const radiusOfSearch = extractRadiusOfSearchFrom(perimeter)

      dispatch({ type: NEARBY_SHOPS_FETCHED, payload: { nearbyShops, radiusOfSearch } })
    }
  }
}

export default routesMap