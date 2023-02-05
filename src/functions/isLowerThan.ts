import { isNumber } from './isNumber'

export const isLowerThan = (value: any, maxValue: number, includeEqual: boolean): boolean =>
  isNumber(value) && (value < maxValue || (includeEqual && value === maxValue))
