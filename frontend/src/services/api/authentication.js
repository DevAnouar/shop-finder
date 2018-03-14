import axios from "axios/index";

export const signUp = (user) =>
  axios.post('/api/users/sign-up', user)
    .then(response => response.data)

export const signIn = (user) =>
  axios.post('/api/users/sign-in', user)
    .then(response => response.data)
    .catch(({ response }) => response.data)