// Years Is a short for Year
export const isLeapYear = (y: number) =>
  Number.isNaN(y) || y <= 0 ? false : y % 4 === 0 && (y % 100 !== 0 || y % 400 === 0)
