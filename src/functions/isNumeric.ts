import { ValidatorPrimitiveFn } from '..'
import { isNumber } from './isNumber'

export const isNumeric: ValidatorPrimitiveFn = (value) => isNumber(parseFloat(value))
