import { isLeapYear, isString, isValidDate } from '../is'
import type { TimeUnits } from './date.type'

const Options: Intl.DateTimeFormatOptions = {
  year: 'numeric',
  month: '2-digit',
  day: '2-digit',
  hour: '2-digit',
  minute: '2-digit',
  second: '2-digit',
  hour12: false,
}

export function formatDate(date: Date | string, format: string, options: Intl.DateTimeFormatOptions = Options): string {
  if (!isValidDate(date)) return ''
  date = new Date(date)
  return new Intl.DateTimeFormat('en-US', options)
    .format(date)
    .replace(/(\d+)\/(\d+)\/(\d+), (\d+):(\d+):(\d+)/, (_, month, day, year, hour, minute, second) => {
      if (format.includes('MM')) {
        month = month.padStart(2, '0')
      }
      if (format.includes('dd')) {
        day = day.padStart(2, '0')
      }
      if (format.includes('yyyy')) {
        year = year.padStart(4, '0')
      }
      if (format.includes('HH')) {
        hour = hour.padStart(2, '0')
      }
      if (format.includes('mm')) {
        minute = minute.padStart(2, '0')
      }
      if (format.includes('ss')) {
        second = second.padStart(2, '0')
      }

      return format
        .replace('MM', month)
        .replace('dd', day)
        .replace('yyyy', year)
        .replace('HH', hour)
        .replace('mm', minute)
        .replace('ss', second)
    })
}

/**
 * Calculates the number of days in a month, given a date.
 * @param {Date} date - The date for which to calculate the number of days in the month.
 * @returns {number} The number of days in the month of the given date.
 */

export function getDaysInMonth(date: Date | string): number | null {
  if (typeof date === 'string') date = new Date(date)
  const year: number = date.getFullYear()
  const month: number = date.getMonth()
  // Create a new Date object for the first day of the next month,
  // and set the day to 0 to get the last day of the desired month.
  const nextMonth: Date = new Date(year, month + 1, 0)
  return nextMonth.getDate()
}

/**
 * Returns the number of days in a year.
 * @param {Date | string} date - The date or date string representing the year.
 * @returns {number} The number of days in the year (365 or 366).
 */
export function getDaysInYear(date: Date | string) {
  if (typeof date === 'string' && !isValidDate(date)) {
    return null
  }
  let realDate = new Date(date)
  return isLeapYear(realDate.getFullYear()) ? 366 : 365
}

export function getTimeAgo(timestamp: Date, locale = 'en'): string {
  const currentDate = new Date()
  const diff = Math.floor((currentDate.getTime() - timestamp.getTime()) / 1000)
  const timeUnits: TimeUnits[] = [
    { unit: 'year', value: 60 * 60 * 24 * (getDaysInYear(timestamp) ?? 1) },
    { unit: 'month', value: 60 * 60 * 24 * (getDaysInMonth(timestamp) ?? 1) },
    { unit: 'day', value: 60 * 60 * 24 },
    { unit: 'hour', value: 60 * 60 },
    { unit: 'minute', value: 60 },
    { unit: 'second', value: 1 },
  ]
  const rtf = new Intl.RelativeTimeFormat(locale, { numeric: 'auto' })

  for (const { unit, value } of timeUnits) {
    const unitDiff = Math.floor(diff / value)
    if (unitDiff >= 1) {
      return rtf.format(0 - unitDiff, unit)
    }
  }

  return rtf.format(0 - diff, 'second')
}

/**
 * Get the year component from a Date object.
 * @param {Date} date - The Date object.
 * @returns {number} - The year component.
 */
export function getYear(date: Date | string): number {
  date = new Date(date)
  return date.getFullYear()
}

/**
 * Get the month component from a Date object.
 * @param {Date} date - The Date object.
 * @returns {number} - The month component (0-11).
 */
export function getMonth(date: Date | string): number {
  date = new Date(date)
  return date.getMonth() + 1
}

/**
 * Get the day component from a Date object.
 * @param {Date} date - The Date object.
 * @returns {number} - The day component (1-31).
 */
export function getDay(date: Date | string): number {
  date = new Date(date)
  return date.getDate()
}

/**
 * Get the day of the week as a string from a Date object.
 * @param {Date} date - The Date object.
 * @param {string} [locale='en-US'] - The locale to use for formatting the day of the week.
 * @param {Intl.DateTimeFormatOptions} [options] - The options to customize the formatting.
 * @returns {string} - The day of the week as a string.
 */

export function getDayString(
  date: Date | string,
  locale: string = 'en-US',
  variant?: Intl.DateTimeFormatOptions['weekday']
): string {
  const options: Intl.DateTimeFormatOptions = { weekday: variant ?? 'long' }
  if (isString(date)) date = new Date(date)
  return new Intl.DateTimeFormat(locale, options).format(date)
}

/**
 * Get the month of the year as a string from a Date object.
 * @param {Date} date - The Date object.
 * @param {string} [locale='en-US'] - The locale to use for formatting the month.
 * @param {Intl.DateTimeFormatOptions} [options] - The options to customize the formatting.
 * @returns {string} - The month of the year as a string.
 */

export function getMonthString(
  date: Date | string,
  locale: string = 'en-US',
  variant?: Intl.DateTimeFormatOptions['month']
): string {
  const options: Intl.DateTimeFormatOptions = { month: variant ?? 'long' }
  if (isString(date)) date = new Date(date)
  return new Intl.DateTimeFormat(locale, options).format(date)
}
