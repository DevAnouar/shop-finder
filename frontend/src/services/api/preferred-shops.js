import axios from "axios/index";
import store from "../../store";
import {goToPreferredShops} from "../../actions";

export const fetchPreferredShops = async () =>
  axios.get('/api/shops/preferred', {
    headers: { Authorization: `Bearer ${localStorage.getItem("jwt")}` }
  }).then(response => response.data)

export const likeShop = (shopId) =>
  axios.post(`/api/shops/preferred/${shopId}/like`, shopId, {
    headers: { Authorization: `Bearer ${localStorage.getItem("jwt")}` }
  }).then(response => response.data)

export const removePreferredShop = (shopId) =>
  axios.delete(`/api/shops/preferred/${shopId}/remove`, {
    headers: { Authorization: `Bearer ${localStorage.getItem("jwt")}` }
  }).then(response => {
    const state = store.getState()
    store.dispatch(goToPreferredShops())
  })