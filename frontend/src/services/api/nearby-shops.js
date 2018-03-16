import axios from "axios/index";
import {isAuthenticated} from "../../selectors";
import store from "../../store";

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
  }).then(response => response.data)
