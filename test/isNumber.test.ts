import { isNumber } from '../dist/index.mjs'

describe('isNumber', () => {
  it('should return true for a valid number', () => {
    expect(isNumber(1)).toBe(true)
    expect(isNumber(0)).toBe(true)
    expect(isNumber(0.1)).toBe(true)
  })

  it('should return false for invalid numbers', () => {
    expect(isNumber(NaN)).toBe(false)
    expect(isNumber(Infinity)).toBe(false)
    expect(isNumber(-Infinity)).toBe(false)
  })

  it('should return false for non-number values', () => {
    expect(isNumber('1')).toBe(false)
    expect(isNumber([1])).toBe(false)
    expect(isNumber({})).toBe(false)
    expect(isNumber(undefined)).toBe(false)
    expect(isNumber(null)).toBe(false)
  })
})
