import { isNumber } from './isNumber'

export const isGreaterThan = (value: any, minValue: number, includeEqual: boolean): boolean =>
  isNumber(value) && (value > minValue || (includeEqual && value >= minValue))
