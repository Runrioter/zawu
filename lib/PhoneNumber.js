'use strict';

const prefixes = require('./prefix')

exports.isValid = n_str => {
  if (typeof n_str !== 'string') {
    return false
  }
  return /^\d{11}$/.test(n_str) && prefixes.some(prefix => n_str.startsWith(prefix))
}