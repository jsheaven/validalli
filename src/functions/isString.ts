import { ValidatorPrimitiveFn } from '..'

export const isString: ValidatorPrimitiveFn = (value) => typeof value === 'string'
