import axios from "axios/index";

export const likeShop = (shopId) =>
  axios.post(`/api/shops/preferred/${shopId}/like`, shopId, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("jwt")}`
    }
  }).then(response => response.data)