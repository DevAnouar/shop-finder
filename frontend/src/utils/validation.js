const radiusOfSearchRegex = /^(\d*\.)?\d+$/

export const isValidRadius = (radiusString) => radiusOfSearchRegex.test(radiusString)

export const precisionRound = (number, precision) => {
  const factor = Math.pow(10, precision)
  return Math.round(number * factor) / factor
}