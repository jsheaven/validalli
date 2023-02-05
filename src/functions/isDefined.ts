import { ValidatorPrimitiveFn } from '../index'

export const isDefined: ValidatorPrimitiveFn = (value) => typeof value !== 'undefined'
