import { ValidatorPrimitiveFn } from '../index'

export const isUrl: ValidatorPrimitiveFn = (value: string) => {
  try {
    new URL(value)
    return true
  } catch (_) {
    return false
  }
}
