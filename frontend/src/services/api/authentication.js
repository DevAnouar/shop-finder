import axios from "axios/index";

export const signUp = (user) =>
  axios.post('/api/users/sign-up', user)
    .then(response => response.data)