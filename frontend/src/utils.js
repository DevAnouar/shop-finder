const radiusOfSearchRegex = /^(\d*\.)?\d+$/

export const isValidRadius = (radius) => radiusOfSearchRegex.test(radius)