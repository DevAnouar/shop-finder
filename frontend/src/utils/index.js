import axios from 'axios'

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