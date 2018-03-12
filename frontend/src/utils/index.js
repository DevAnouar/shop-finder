import axios from 'axios'
import btoa from 'btoa'

const radiusOfSearchRegex = /^(\d*\.)?\d+$/

export const isValidRadius = (radiusString) => radiusOfSearchRegex.test(radiusString)

export const precisionRound = (number, precision) => {
  const factor = Math.pow(10, precision)
  return Math.round(number * factor) / factor
}

export const extractRadiusOfSearchFrom = (perimeter) => perimeter.substr(perimeter.lastIndexOf(',')+1)

export const fetchNearbyShops = async (path) =>
  axios.get(path)
    .then(response => response.data)

export const PASSWORD_REGEX = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{3,}$/

/**
 * Generate 16 bytes salt for bcrypt by seed. Should return the same salt for the same seed.
 * @param  {string} seed The seed for salt
 */
export const genSalt = seed => {
  const bytes = []

  for (let i = 0, l = seed.length; i < l; i++) {
    bytes.push(seed.charCodeAt(i))
  }

  // Salt must be 16 bytes
  while (bytes.length < 16) {
    bytes.push(0)
  }

  // Convert byte array to base64 string
  const salt = btoa(String.fromCharCode.apply(String, bytes.slice(0, 16)))

  // Adding header for bcrypt. Fake 10 rounds.
  return '$2a$10$' + salt
}

export const signUp = async (user) =>
  axios.post('/api/users/sign-up', user)
    .then(response => response.data)