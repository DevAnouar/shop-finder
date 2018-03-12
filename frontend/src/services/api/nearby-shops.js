import axios from "axios/index";

export const fetchNearbyShops = async (perimeter) =>
  axios.get(`/api/shops/nearby/${perimeter}`)
    .then(response => response.data)