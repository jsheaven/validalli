import { ValidatorPrimitiveFn } from '../index'
import { isObject } from './isObject'
import { isString } from './isString'

export const isEmpty: ValidatorPrimitiveFn = (value) => {
  if (value === null || value === undefined) return true
  if (Array.isArray(value) || isObject(value)) return Object.keys(value).length === 0
  if (value instanceof Date || isString(value)) return value === ''
  return false
}
