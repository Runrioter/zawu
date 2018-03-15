'use strict';

const phoneNumber = require('./lib/PhoneNumber')
const CJK = require('./lib/CJK')

exports.isValidPhoneNumber = phoneNumber.isValid
exports.isCJKChar = CJK.isCJKChar
exports.isCJKString = CJK.isCJKString
exports.isCJKStringWithLength = CJK.isCJKStringWithLength
