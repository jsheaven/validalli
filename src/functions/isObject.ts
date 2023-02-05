import { ValidatorPrimitiveFn } from '..'

export const isObject: ValidatorPrimitiveFn = (value: any) =>
  value !== null && typeof value === 'object' && !Array.isArray(value)
