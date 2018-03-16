import axios from "axios/index";
import {AUTHORIZATION_HEADER} from "../security";

export const fetchPreferredShops = async () =>
  axios.get('/api/shops/preferred', {
    headers: AUTHORIZATION_HEADER
  }).then(response => response.data)

export const likeShop = (shopId) =>
  axios.post(`/api/shops/preferred/${shopId}/like`, shopId, {
    headers: AUTHORIZATION_HEADER
  }).then(response => response.data)

export const removePreferredShop = (shopId) =>
  axios.delete(`/api/shops/preferred/${shopId}/remove`, {
    headers: AUTHORIZATION_HEADER
  }).then(response => response.data)