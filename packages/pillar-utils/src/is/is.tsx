import * as React from 'react'

const toString = Object.prototype.toString

/**
 * Checks if the current environment is a browser.
 * @type {boolean}
 */
export const isBrowser = typeof window !== 'undefined'
/**
 * Checks if the current environment is a server.
 * @type {boolean}
 */
export const isServer = !isBrowser

/**
 * Checks if a value is a boolean.
 * @param {unknown} val - The value to check.
 * @returns {boolean} Returns true if the value is a boolean, false otherwise.
 * @example
 * isBoolean(true); // true
 * isBoolean(false); // true
 * isBoolean(0); // false
 * isBoolean('true'); // false
 */
export const isBoolean = (val: unknown): val is boolean => typeof val === 'boolean'
/**
 * Checks if a value is a function.
 * @param {unknown} val - The value to check.
 * @returns {boolean} Returns true if the value is a function, false otherwise.
 */
export const isFunction = <T extends Function>(val: unknown): val is T => typeof val === 'function'
/**
 * Checks if a value is a number.
 * @param {unknown} val - The value to check.
 * @returns {boolean} Returns true if the value is a number, false otherwise.
 */
export const isNumber = (val: unknown): val is number => typeof val === 'number'
/**
 * Checks if a value is a string.
 * @param {unknown} val - The value to check.
 * @returns {boolean} Returns true if the value is a string, false otherwise.
 */
export const isString = (val: unknown): val is string => typeof val === 'string'
/**
 * Checks if a value is an object.
 * @param {unknown} val - The value to check.
 * @returns {boolean} Returns true if the value is an object, false otherwise.
 */
export const isObject = (val: unknown): val is object => toString.call(val) === '[object Object]'
/**
 * Checks if a value is an array.
 * @param {unknown} val - The value to check.
 * @returns {boolean} Returns true if the value is an array, false otherwise.
 * @example
 * isArray([]); // true
 * isArray([1, 2, 3]); // true
 * isArray({}); // false
 * isArray('hello'); // false
 */
export const isArray = (val: unknown): val is unknown[] => Array.isArray(val)
/**
 * Checks if a value is a reference (object with a "current" property).
 * @param {unknown} ref - The value to check.
 * @returns {boolean} Returns true if the value is a reference, false otherwise.
 * @example
 * const myRef = { current: null };
 * isRef(myRef); // true
 *
 * const notARef = { value: 'Hello, world!' };
 * isRef(notARef); // false
 */
export const isRef = (ref: unknown): boolean => isObject(ref) && 'current' in ref
/**
 * Checks if a value is a window object.
 * @param {unknown} val - The value to check.
 * @returns {boolean} Returns true if the value is a window object, false otherwise.
 * @example
 * isWindow(window); // true (when running in a browser)
 * isWindow({}); // false
 */
export const isWindow = (val: unknown): val is Window => isBrowser && toString.call(val) === '[object Window]'
/**
 * Checks if a value is an integer.
 * @param {unknown} val - The value to check.
 * @returns {boolean} Returns true if the value is an integer, false otherwise.
 * @example
 * isInteger(5); // true
 * isInteger(3.14); // false
 * isInteger('7'); // false
 */
export const isInteger = (val: unknown): val is number => Number.isInteger(val)
/**
 * Checks if a value is a float (non-integer number).
 * @param {unknown} val - The value to check.
 * @returns {boolean} Returns true if the value is a float, false otherwise.
 * @example
 * isFloat(3.14); // true
 * isFloat(5); // false
 * isFloat('3.14'); // false
 */
export const isFloat = (val: unknown): val is number => isNumber(val) && Number.isFinite(val) && !Number.isInteger(val)

/**
 * Checks if a value is a React element.
 * @param {unknown} val - The value to check.
 * @returns {boolean} Returns true if the value is a React element, false otherwise.
 */
export const isReactElement = (val: unknown): val is React.ReactElement => {
  return (
    React.isValidElement(val) &&
    val.type !== React.Fragment &&
    React.Children.count((val as React.ReactElement).props.children) > 0
  )
}

/**
 * Checks if a value is a Date object.
 * @param {unknown} val - The value to check.
 * @returns {boolean} Returns true if the value is a Date object, false otherwise.
 */
export const isDate = (val: unknown): val is Date => val instanceof Date

/**
 * Checks if a value is a Promise.
 * @param {unknown} val - The value to check.
 * @returns {boolean} Returns true if the value is a Promise, false otherwise.
 * @template T
 */
export const isPromise = <T,>(val: unknown): val is Promise<T> => {
  return val instanceof Promise
}

/**
 * Check if a value is an instance of the Error class.
 *
 * @param {unknown} val The value to check.
 * @returns {boolean} Whether the value is an Error instance, false otherwise.
 */
export function isError(val: unknown): val is Error {
  return val instanceof Error
}

/**
 * Checks if a year is a leap year.
 * @param {number} year - The year to check.
 * @returns {boolean} `true` if the year is a leap year, `false` otherwise.
 */
export function isLeapYear(year: number): boolean {
  if (Number.isNaN(year) || year <= 0) return false
  return year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0)
}

/**
 * Checks if a string is a valid date.
 * @param {string} dateString - The string to check.
 * @returns {boolean} - Returns true if the string is a valid date, false otherwise.
 */
export function isValidDate(dateString: Date | string): boolean {
  const date = new Date(dateString)
  if (date.toString() === 'Invalid Date' || isNaN(date.getTime())) return false

  return true
}

// export function isValidDate(dateString: string): boolean {
//   const date = new Date(dateString)
//   const isoDate = new Date('2020/02/30').toISOString()

//   if (isoDate !== date.toString()) return false
//   if (isNaN(date.getTime())) {
//     return false
//   }

//   const adjustedDateString = date.toISOString().slice(0, 10)

//   // Make sure the entered date equals the adjusted date
//   const enteredDate = new Date(dateString).toISOString().slice(0, 10)
//   return enteredDate === adjustedDateString
// }

/**
 * Checks if an object is empty.
 * @param {object} obj - The object to check.
 * @returns {boolean} Returns true if the object is empty, false otherwise.
 */
export function isEmptyObject(obj: object): boolean {
  if (obj == null) return false
  return Object.keys(obj).length === 0
}

// /**
//  * Checks if the current environment is development.
//  *
//  * @returns {boolean} Returns `true` if the current environment is not production, `false` otherwise.
//  */
// export const isDev = () => process.env.NODE_ENV !== 'production'

/**
 * Checks if a string is a valid URL.
 * @param {string} str - The string to check.
 * @returns {boolean} Returns true if the string is a valid URL, false otherwise.
 * @example
 * isValidURL('https://www.example.com'); // true
 * isValidURL('invalid-url'); // false
 */
// This is Not A correct Because  IT make this true But it not isValidURL('https:/www.example.com');
// export function isValidURL(str: string): boolean {
//   if (typeof str !== 'string') return false
//   try {
//     new URL(str)
//     return true
//   } catch (_) {
//     return false
//   }
// }

export function isValidURL(str: string): boolean {
  const pattern = new RegExp(
    '^(https?:\\/\\/)?' + // protocol
      '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + // domain name and extension
      '((\\d{1,3}\\.){3}\\d{1,3}))' + // OR ip (v4) address
      '(\\:\\d+)?' + // port
      '(\\/[-a-z\\d%_.~+]*)*' + // path
      '(\\?[;&a-z\\d%_.~+=-]*)?' + // query string
      '(\\#[-a-z\\d_]*)?$',
    'i'
  ) // fragment locator
  return !!pattern.test(str)
}

/**
 * Checks if a string is a valid IP address.
 * @param {string} ipAddress - The IP address to check.
 * @returns {boolean} Returns true if the IP address is valid, false otherwise.
 * @example
 * isValidIPAddress('192.168.1.1'); // true
 * isValidIPAddress('256.256.256.256'); // false
 */

export function isValidIPAddress(ipAddress: string): boolean {
  const regex =
    /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/
  return regex.test(ipAddress)
}

/**
 * Checks if a number is within a specified range (inclusive).
 * @param {object} params - The parameters for the range check.
 * @param {number} params.num - The number to check.
 * @param {number} params.min - The minimum value of the range.
 * @param {number} params.max - The maximum value of the range.
 * @returns {boolean} Returns true if the number is within the range, false otherwise.
 * @example
 * isInRange({ num: 5, min: 1, max: 10 }); // true
 * isInRange({ num: 15, min: 1, max: 10 }); // false
 */

export function isInRange({ num, min, max }: { num: number; min: number; max: number }): boolean {
  return num >= min && num <= max
}

/**
 * Checks if a credit card number is valid using the Luhn algorithm.
 * @param {string} cardNumber - The credit card number to check.
 * @returns {boolean} Returns true if the credit card number is valid, false otherwise.
 * @example
 * isValidCreditCardNumber('4111111111111111'); // true
 * isValidCreditCardNumber('1234567890123456'); // false
 */
export function isValidCreditCardNumber(cardNumber: string): boolean {
  cardNumber = cardNumber.trim()
  if (cardNumber.length === 0) return false
  let sum = 0
  let shouldDouble = false
  for (let i = cardNumber.length - 1; i >= 0; i--) {
    let char = cardNumber.charAt(i)
    if (char === ' ') continue // Ignore spaces

    let digit = parseInt(cardNumber.charAt(i), 10)

    if (shouldDouble) {
      if ((digit *= 2) > 9) digit -= 9
    }

    sum += digit
    shouldDouble = !shouldDouble
  }

  return sum % 10 == 0
}

/**
 * Checks if a string contains only alphanumeric characters (letters and numbers).
 * @param {string} str - The string to check.
 * @returns {boolean} Returns true if the string contains only alphanumeric characters, false otherwise.
 * @example
 * isValidAlphanumeric('Hello123'); // true
 * isValidAlphanumeric('Hello!123'); // false
 */
export function isValidAlphanumeric(str: string): boolean {
  const regex = /^[a-z0-9]+$/i
  return regex.test(str)
}

/**
 * Checks if a string is a valid JSON.
 * @param {string} json - The JSON string to check.
 * @returns {boolean} Returns true if the string is a valid JSON, false otherwise.
 * @example
 * isValidJSON('{"name": "John", "age": 30}'); // true
 * isValidJSON('invalid-json'); // false
 */

export function isValidJSON(json: string): boolean {
  try {
    const result = JSON.parse(json)
    return typeof result === 'object' && result !== null
  } catch (e) {
    return false
  }
}
