import btoa from "btoa";
import * as jwt from "jsonwebtoken";

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

export const extractJwt = authorizationHeader => authorizationHeader.replace("Bearer ", "")

export const isJwtExpired = (token) => {
  const decodedToken = jwt.decode(token, { complete: true })
  return decodedToken.exp < new Date().getTime();
}
