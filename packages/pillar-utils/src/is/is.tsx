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
 */
export const isArray = (val: unknown): val is unknown[] => Array.isArray(val)
/**
 * Checks if a value is a reference (object with a "current" property).
 * @param {unknown} ref - The value to check.
 * @returns {boolean} Returns true if the value is a reference, false otherwise.
 */
export const isRef = (ref: unknown): boolean => isObject(ref) && 'current' in ref
/**
 * Checks if a value is a window object.
 * @param {unknown} val - The value to check.
 * @returns {boolean} Returns true if the value is a window object, false otherwise.
 */
export const isWindow = (val: unknown): val is Window => isBrowser && toString.call(val) === '[object Window]'
/**
 * Checks if a value is an integer.
 * @param {unknown} val - The value to check.
 * @returns {boolean} Returns true if the value is an integer, false otherwise.
 */
export const isInteger = (val: unknown): val is number => Number.isInteger(val)
/**
 * Checks if a value is a float (non-integer number).
 * @param {unknown} val - The value to check.
 * @returns {boolean} Returns true if the value is a float, false otherwise.
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
  return year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0)
}
