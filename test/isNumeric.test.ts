import { isNumeric } from '../dist/index.mjs'

describe('isNumeric', () => {
  it('returns true for a number string', () => {
    expect(isNumeric('123')).toBe(true)
  })

  it('returns false for a non-numeric string', () => {
    expect(isNumeric('abc')).toBe(false)
  })

  it('returns true for a finite number', () => {
    expect(isNumeric(123)).toBe(true)
  })

  it('returns false for NaN', () => {
    expect(isNumeric(NaN)).toBe(false)
  })

  it('returns false for infinity', () => {
    expect(isNumeric(Infinity)).toBe(false)
  })

  it('returns false for negative infinity', () => {
    expect(isNumeric(-Infinity)).toBe(false)
  })
})
