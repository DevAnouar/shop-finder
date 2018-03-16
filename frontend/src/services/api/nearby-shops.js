import axios from "axios/index";
import {getRadiusOfSearch, getUserLocation, isAuthenticated} from "../../selectors";
import store from "../../store";
import {goToNearbyShops} from "../../actions";

export const fetchNearbyShops = async (perimeter) =>
  axios.get(`/api/shops/nearby/${perimeter}`, {
    headers: isAuthenticated(store.getState()) ?
      { Authorization: `Bearer ${localStorage.getItem("jwt")}` }
      : {}
  }).then(response => response.data)

export const dislikeShop = (shopId) =>
  axios.post(`/api/shops/${shopId}/dislike`, shopId, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("jwt")}`
    }
  }).then(response => {
    const state = store.getState()
    const userLocation = getUserLocation(state)
    const radiusOfSearch = getRadiusOfSearch(state)
    store.dispatch(goToNearbyShops(userLocation.latitude, userLocation.longitude, radiusOfSearch))
  })
