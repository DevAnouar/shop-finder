import {extractRadiusOfSearchFrom} from "../utils";
import {fetchNearbyShops} from "../services/api/nearby-shops";
import {fetchPreferredShops} from "../services/api/preferred-shops";
import {nearbyShopsFetched, preferredShopsFetched} from "../actions";

// TODO decode url for display on address bar
const routesMap = {
  HOME: '/',
  NEARBY_SHOPS: {
    path: '/shops/nearby/:perimeter',
    fromPath: (pathSegment) => decodeURIComponent(pathSegment),
    thunk: async (dispatch, getState) => {
      const { perimeter } = getState().location.payload
      const nearbyShops = await fetchNearbyShops(perimeter)
      const radiusOfSearch = extractRadiusOfSearchFrom(perimeter)

      dispatch(nearbyShopsFetched(nearbyShops, radiusOfSearch))
    }
  },
  PREFERRED_SHOPS: {
    path: '/shops/preferred',
    thunk: async (dispatch) => {
      const preferredShops = await fetchPreferredShops()
      dispatch(preferredShopsFetched(preferredShops))
    }
  }
}

export default routesMap