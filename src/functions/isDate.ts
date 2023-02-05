import { ValidatorPrimitiveFn } from '../index'

export const isDate: ValidatorPrimitiveFn = (value) => value instanceof Date && !isNaN(value.getDate())
