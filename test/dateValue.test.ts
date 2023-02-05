import { getDateValue } from '../dist/index.mjs'

describe('getDateValue', () => {
  it('should return a DateValue object with the correct year, month, and date', () => {
    const date = new Date(2022, 0, 1)
    const dateValue = getDateValue(date)
    expect(dateValue).toEqual({ year: 2022, month: 0, date: 1 })
  })

  it('should return a different DateValue object for a different date', () => {
    const date = new Date(2022, 1, 1)
    const dateValue = getDateValue(date)
    expect(dateValue).toEqual({ year: 2022, month: 1, date: 1 })
  })

  it('should return a DateValue object with the correct year, month, and date for a date in December', () => {
    const date = new Date(2022, 11, 31)
    const dateValue = getDateValue(date)
    expect(dateValue).toEqual({ year: 2022, month: 11, date: 31 })
  })

  it('should return a DateValue object with the correct year, month, and date for a date in January', () => {
    const date = new Date(2022, 0, 31)
    const dateValue = getDateValue(date)
    expect(dateValue).toEqual({ year: 2022, month: 0, date: 31 })
  })

  it('should return a DateValue object with the correct year, month, and date for a date in February', () => {
    const date = new Date(2022, 1, 28)
    const dateValue = getDateValue(date)
    expect(dateValue).toEqual({ year: 2022, month: 1, date: 28 })
  })
})
