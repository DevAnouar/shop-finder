import axios from "axios/index";
import {extractJwt} from "../security";

export const signUp = (user) =>
  axios.post('/api/users/sign-up', user)
    .then(response => response.data)

export const signIn = (user) =>
  axios.post('/api/users/sign-in', user)
    .then(response => {
      const jwt = extractJwt(response.headers.authorization)
      return { ...response.data, jwt }
    })
    .catch(({ response }) => response.data)