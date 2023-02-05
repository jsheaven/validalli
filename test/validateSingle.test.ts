import { isDefined, isEmail, isEqual, validateSingle } from '../dist/index.mjs'
import { jest } from '@jest/globals'

describe('validateSingle', () => {
  const isEqualValidator = (expectation: any) =>
    jest.fn().mockImplementation(({ value }: any) => {
      console.log('INPUT', value, 'expectation', expectation)
      return isEqual(value, expectation) ? true : 'Values are not equal'
    })

  const isEmailValidator = () =>
    jest.fn().mockImplementation(({ value }: any) => {
      return isEmail(value) ? true : 'Value is not an email'
    })

  const isDefinedValidator = () =>
    jest.fn().mockImplementation(({ value }: any) => {
      return isDefined(value) ? true : 'Value is not defined'
    })

  it('should return an object with isValid set to true if all validators pass', async () => {
    const result = await validateSingle('valid@bar.com', [
      isEqualValidator('valid@bar.com'),
      isEmailValidator(),
      isDefinedValidator(),
    ])

    console.log('result', result)
    expect(result).toEqual({
      isValid: true,
      states: [{ isValid: true }, { isValid: true }, { isValid: true }],
    })
  })

  it('should stop after the first error if stopOnInvalid is set to true', async () => {
    const result = await validateSingle(
      'valid',
      [isDefinedValidator(), isEmailValidator(), isEqualValidator('valid')],
      true,
    )
    expect(result).toEqual({
      isValid: false,
      message: 'Value is not an email',
      states: [{ isValid: true }, { isValid: false, message: 'Value is not an email' }],
    })
  })

  it('should not stop after the first error if stopOnInvalid is set to false', async () => {
    const result = await validateSingle(
      'valid',
      [isDefinedValidator(), isEmailValidator(), isEqualValidator('valid')],
      false,
    )
    expect(result).toEqual({
      isValid: false,
      message: 'Value is not an email',
      states: [{ isValid: true }, { isValid: false, message: 'Value is not an email' }, { isValid: true }],
    })
  })
})
