'use strict'

const prefixes = require('./prefix')

exports.isValid = str => {
  if (typeof str !== 'string') {
    return false
  }
  return /^\d{11}$/.test(str) && prefixes.some(prefix => str.startsWith(prefix))
}
