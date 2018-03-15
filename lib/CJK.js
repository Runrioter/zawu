'use strict'

const isCJKString = str => /^[\u4e00-\u9fca]+$/.test(str)

const isCJKStringWithLength = (str, len) => {
  if (typeof len !== 'number') throw new TypeError('len must be a number')
  if (len < 1) return false
  const regexp = new RegExp(`^[\\u4e00-\\u9fca]{${len}}$`)
  return regexp.test(str)
}

const isCJKChar = c => /^[\u4e00-\u9fca]$/.test(c)

exports.isCJKChar = isCJKChar
exports.isCJKString = isCJKString
exports.isCJKStringWithLength = isCJKStringWithLength
