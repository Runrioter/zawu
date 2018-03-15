# zawu

[![npm](https://img.shields.io/npm/v/zawu.svg)](https://www.npmjs.com/package/zawu)
[![Travis branch](https://img.shields.io/travis/Runrioter/zawu/master.svg)](https://travis-ci.org/Runrioter/zawu)
[![Codecov branch](https://img.shields.io/codecov/c/github/Runrioter/zawu/master.svg)](https://codecov.io/github/Runrioter/zawu?branch=master)

zawu => 杂物

## Install

Run `npm i zawu -S`

## Usage

```javascript
const zawu = require('zawu');

const phoneNumber = '15212345678';

if (zawu.isValidPhoneNumber(phoneNumber)) {
  //...
} else {
  //...
}

```

### API

* isValidPhoneNumber to validate if the phone number is a good formatted in China.
  * `#isValidPhoneNumber('15212345678')`
* isCJKChar to validate if a char is a cjk char
  * `#isCJKChar('杂')`
* isCJKString to validate if a string is a cjk string
  * `#isCJKString('杂物')`
* isCJKStringWithLength to validate if a string is a cjk string with n length
  * `#isCJKStringWithLength('杂物' ,2)`
