import { ValidatorPrimitiveFn } from '..'

export const isRequired: ValidatorPrimitiveFn = (value) => !!value
