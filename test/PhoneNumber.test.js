const zawu = require('..');

describe('Test zawu#isValidPhoneNumber', () => {

  test('15212345678 should be a valid phone number', () => {
    expect(zawu.isValidPhoneNumber('15212345678')).toBe(true)
  })

  test('it should accept a string parameter', () => {
    expect(zawu.isValidPhoneNumber(15212345678)).toBe(false)
  })

  test('152e2345678 should not a phone number', () => {
    expect(zawu.isValidPhoneNumber('152e2345678')).toBe(false)
  })

  test('the length of number should be 11', () => {
    expect(zawu.isValidPhoneNumber('1521234567')).toBe(false)
    expect(zawu.isValidPhoneNumber('152123456789')).toBe(false)
  })

  test('the number should have a valid prefix', () => {
    expect(zawu.isValidPhoneNumber('25212345678')).toBe(false)
  })

})