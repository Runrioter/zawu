const zawu = require('..')

describe('Test zawu#isCJKChar', () => {
  test('A should be not a CJK char', () => {
    expect(zawu.isCJKChar('A')).toBe(false)
  })

  test('empty char/string should be not a CJK char', () => {
    expect(zawu.isCJKChar('')).toBe(false)
  })

  test('杂 should be a CJK char', () => {
    expect(zawu.isCJKChar('杂')).toBe(true)
  })

  test('杂物 should be not a CJK char', () => {
    expect(zawu.isCJKChar('杂物')).toBe(false)
  })

  test('杂wu should be not a CJK char', () => {
    expect(zawu.isCJKChar('杂wu')).toBe(false)
  })
})

describe('Test zawu#isCJKString', () => {
  test('empty string should be not a CJK string', () => {
    expect(zawu.isCJKString('')).toBe(false)
  })

  test('AB should be not a CJK string', () => {
    expect(zawu.isCJKString('AB')).toBe(false)
  })

  test('杂物 should be a CJK string', () => {
    expect(zawu.isCJKString('杂物')).toBe(true)
  })

  test('杂wu should be not a CJK string', () => {
    expect(zawu.isCJKString('杂wu')).toBe(false)
  })

  test('杂 should be also a CJK string', () => {
    expect(zawu.isCJKString('杂')).toBe(true)
  })
})

describe('Test zawu#isCJKStringWithLength', () => {
  test('empty string should be not a CJK string with length 0', () => {
    expect(zawu.isCJKStringWithLength('', 0)).toBe(false)
  })

  test('AB should be not a CJK string', () => {
    expect(zawu.isCJKStringWithLength('AB', 2)).toBe(false)
  })

  test('杂物 should be a CJK string with length 2', () => {
    expect(zawu.isCJKStringWithLength('杂物', 2)).toBe(true)
  })

  test('isCJKStringWithLength should throws when the second parameter is not a number', () => {
    expect(() => { zawu.isCJKStringWithLength('杂物', '2') }).toThrow(/len must be a number/)
  })

  test('杂物 should be not a CJK string with length 3', () => {
    expect(zawu.isCJKStringWithLength('杂物', 3)).toBe(false)
  })
})
