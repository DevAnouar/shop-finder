const radiusOfSearchRegex = /^(\d*\.)?\d+$/

export const isValidRadius = (radiusString) => radiusOfSearchRegex.test(radiusString)