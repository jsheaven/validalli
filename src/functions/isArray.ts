import { ValidatorPrimitiveFn } from '../index'

export const isArray: ValidatorPrimitiveFn = (value) => Array.isArray(value)
