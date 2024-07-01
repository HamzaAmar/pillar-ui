import { range } from '../array'
import { isLeapYear, isString, isValidDate, isValidLocale } from '../is'

export interface TimeUnits {
  unit: Intl.RelativeTimeFormatUnit
  value: number
}

export interface CalendarDate {
  day: string
  month: string
  year: number
}

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
  if (isString(date)) date = new Date(date)
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
  if (isString(date) && !isValidDate(date)) {
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

/**
 * Gets the start of the year for a given date.
 *
 * @param {Date | string} date - The date for which to get the start of the year.
 * @param {string} [locale='en-US'] - The locale to use for formatting the day and month names.
 * @returns {Object} An object containing the day, month, and year of the start of the year.
 * @throws {TypeError} If the input date is not a valid Date object or a valid date string.
 *
 * @example
 * const result = getStartOfYear('2023-04-15', 'en-US');
 * // Output: { day: 'Saturday', month: 'January', year: 2023 }
 *
 * @example
 * const date = new Date('2022-09-25');
 * const result = getStartOfYear(date, 'en-US');
 * // Output: { day: 'Saturday', month: 'January', year: 2022 }
 */
export function getStartOfYear(date: Date | string, locale = 'en-US'): CalendarDate {
  if (!isValidLocale(locale)) {
    console.log(`"${locale}" is not a valid locale. Converting to "en-US".`)
    locale = 'en-US'
  }
  if (isString(date)) {
    date = new Date(date)
  }
  const startOfYear = new Date(date.getFullYear(), 0, 1)
  const day = startOfYear.toLocaleString(locale, { weekday: 'long' })
  const month = startOfYear.toLocaleString(locale, { month: 'long' })
  const year = startOfYear.getFullYear()
  return {
    day: day,
    month: month,
    year: year,
  }
}

/**
 * Gets the end of the year for a given date.
 *
 * @param {Date | string} date - The date for which to get the end of the year.
 * @param {string} [locale='en-US'] - The locale to use for formatting the day and month names.
 * @returns {Object} An object containing the day, month, and year of the end of the year.
 * @throws {TypeError} If the input date is not a valid Date object or a valid date string.
 *
 * @example
 * const result = getEndOfYear('2023-04-15', 'en-US');
 * // Output: { day: 'Sunday', month: 'December', year: 2023 }
 *
 * @example
 * const date = new Date('2022-09-25');
 * const result = getEndOfYear(date, 'en-US');
 * // Output: { day: 'Saturday', month: 'December', year: 2022 }
 */

export function getEndOfYear(date: Date | string, locale = 'en-US'): CalendarDate {
  if (!isValidLocale(locale)) {
    console.log(`"${locale}" is not a valid locale. Converting to "en-US".`)
    locale = 'en-US'
  }
  if (isString(date)) {
    date = new Date(date)
  }
  const endOfYear = new Date(date.getFullYear(), 11, 31)
  const day = endOfYear.toLocaleString(locale, { weekday: 'long' })
  const month = endOfYear.toLocaleString(locale, { month: 'long' })
  const year = endOfYear.getFullYear()
  return {
    day: day,
    month: month,
    year: year,
  }
}

/**
 * Gets the start of the month for a given date.
 *
 * @param {Date | string} date - The date for which to get the start of the month.
 * @param {string} [locale='en-US'] - The locale to use for formatting the day and month names.
 * @returns {Object} An object containing the day, month, and year of the start of the month.
 * @throws {TypeError} If the input date is not a valid Date object or a valid date string.
 *
 * @example
 * const result = getStartOfMonth('2023-04-15', 'en-US');
 * // Output: { day: 'Saturday', month: 'April', year: 2023 }
 *
 * @example
 * const date = new Date('2022-09-25');
 * const result = getStartOfMonth(date, 'en-US');
 * // Output: { day: 'Friday', month: 'September', year: 2022 }
 */
export function getStartOfMonth(date: Date | string, locale = 'en-US'): CalendarDate {
  if (isString(date)) {
    date = new Date(date)
  }
  if (!(date instanceof Date && !isNaN(date.getTime()))) {
    throw new TypeError('Invalid date. Please provide a valid Date object or a valid date string.')
  }

  // Validate the locale and set it to 'en-US' if it's not valid
  if (!isValidLocale(locale)) {
    console.log(`"${locale}" is not a valid locale. Converting to "en-US".`)
    locale = 'en-US'
  }

  const startOfMonth = new Date(date.getFullYear(), date.getMonth(), 1)
  const day = startOfMonth.toLocaleString(locale, { weekday: 'long' })
  const month = startOfMonth.toLocaleString(locale, { month: 'long' })
  const year = startOfMonth.getFullYear()

  return {
    day: day,
    month: month,
    year: year,
  }
}

/**
 * Gets the end of the month for a given date.
 *
 * @param {Date | string} date - The date for which to get the end of the month.
 * @param {string} [locale='en-US'] - The locale to use for formatting the day and month names.
 * @returns {Object} An object containing the day, month, and year of the end of the month.
 * @throws {TypeError} If the input date is not a valid Date object or a valid date string.
 *
 * @example
 * const result = getEndOfMonth('2023-04-15', 'en-US');
 * // Output: { day: 'Sunday', month: 'April', year: 2023 }
 *
 * @example
 * const date = new Date('2022-09-25');
 * const result = getEndOfMonth(date, 'en-US');
 * // Output: { day: 'Saturday', month: 'September', year: 2022 }
 */
export function getEndOfMonth(date: Date | string, locale = 'en-US'): CalendarDate {
  if (isString(date)) date = new Date(date)

  if (!(date instanceof Date && !isNaN(date.getTime()))) {
    throw new TypeError('Invalid date. Please provide a valid Date object or a valid date string.')
  }

  // Validate the locale and set it to 'en-US' if it's not valid
  if (!isValidLocale(locale)) {
    console.log(`"${locale}" is not a valid locale. Converting to "en-US".`)
    locale = 'en-US'
  }

  const endOfMonth = new Date(date.getFullYear(), date.getMonth() + 1, 0)
  const day = endOfMonth.toLocaleString(locale, { weekday: 'long' })
  const month = endOfMonth.toLocaleString(locale, { month: 'long' })
  const year = endOfMonth.getFullYear()

  return {
    day: day,
    month: month,
    year: year,
  }
}

/**
 * Gets the start of the week for a given date.
 *
 * @param {Date | string} date - The date for which to get the start of the week.
 * @param {string} [locale='en-US'] - The locale to use for formatting the day and month names.
 * @returns {CalendarDate} An object containing the day, month, and year of the start of the week.
 * @throws {TypeError} If the input date is not a valid Date object or a valid date string.
 *
 * @example
 * const result = getStartOfWeek('2023-04-15', 'en-US');
 * // Output: { day: 'Sunday', month: 'April', year: 2023 }
 *
 * @example
 * const date = new Date('2022-09-25');
 * const result = getStartOfWeek(date, 'en-US');
 * // Output: { day: 'Sunday', month: 'September', year: 2022 }
 */

export function getStartOfWeek(date: Date | string, locale = 'en-US'): CalendarDate {
  if (isValidLocale(locale)) {
    console.log(`This is not a valid locale: ${locale}. Changing it to 'en-US'.`)
    locale = 'en-US'
  }
  if (isString(date)) {
    date = new Date(date)
  }
  const startOfWeek = new Date(date)
  const dayIndex = startOfWeek.getDay()

  startOfWeek.setDate(startOfWeek.getDate() - dayIndex)
  const day = startOfWeek.toLocaleString(locale, { weekday: 'long' })
  const month = startOfWeek.toLocaleString(locale, { month: 'long' })
  const year = startOfWeek.getFullYear()

  return {
    day: day,
    month: month,
    year: year,
  }
}

/**
 * Gets the end of the week for a given date.
 *
 * @param {Date | string} date - The date for which to get the end of the week.
 * @param {string} [locale='en-US'] - The locale to use for formatting the day and month names.
 * @returns {CalendarDate} An object containing the day, month, and year of the end of the week.
 * @throws {TypeError} If the input date is not a valid Date object or a valid date string.
 *
 * @example
 * const result = getEndOfWeek('2023-04-15', 'en-US');
 * // Output: { day: 'Saturday', month: 'April', year: 2023 }
 *
 * @example
 * const date = new Date('2022-09-25');
 * const result = getEndOfWeek(date, 'en-US');
 * // Output: { day: 'Saturday', month: 'September', year: 2022 }
 */

export function getEndOfWeek(date: Date | string, locale = 'en-US'): CalendarDate {
  if (isValidLocale(locale)) {
    console.log(`This is not a valid locale: ${locale}. Changing it to 'en-US'.`)
    locale = 'en-US'
  }
  if (isString(date)) {
    date = new Date(date)
  }
  const endOfWeek = new Date(date)
  const dayIndex = endOfWeek.getDay()

  endOfWeek.setDate(endOfWeek.getDate() + (6 - dayIndex))
  const day = endOfWeek.toLocaleString(locale, { weekday: 'long' })
  const month = endOfWeek.toLocaleString(locale, { month: 'long' })
  const year = endOfWeek.getFullYear()

  return {
    day: day,
    month: month,
    year: year,
  }
}

/**
 * Returns an array of years within the specified range (inclusive).
 *
 * @param {number} startYear - The starting year of the range.
 * @param {number} endYear - The ending year of the range.
 * @returns {number[]} An array of years within the specified range.
 *
 * @example
 * const years = getYearsInRange(2020, 2025);
 * // Output: [2020, 2021, 2022, 2023, 2024, 2025]
 */
export function getYearsInRange(startYear: number, endYear: number): number[] {
  return range(startYear, endYear)
}

/**
 * Returns an array of localized weekday names for a given locale and type.
 *
 * @param {string} [locale='en-US'] - The locale for which to get the weekday names.
 * @param {'long' | 'short' | 'narrow'} [type='long'] - The type of weekday name to retrieve.
 * @returns {string[]} An array of weekday names based on the provided locale and type.
 *
 * @example
 * const weekdaysEnLong = getWeekdays('en-US', 'long');
 * // Output: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
 *
 * @example
 * const weekdaysEnShort = getWeekdays('en-US', 'short');
 * // Output: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
 *
 * @example
 * const weekdaysFrNarrow = getWeekdays('fr-FR', 'narrow');
 * // Output: ["D", "L", "M", "M", "J", "V", "S"]
 *
 */
export function getWeekdays(locale = 'en-US', type: 'long' | 'short' | 'narrow' = 'long'): string[] {
  return Array.from({ length: 7 }, (_, i) =>
    new Intl.DateTimeFormat(locale, { weekday: type }).format(new Date(Date.UTC(2022, 0, i + 1)))
  )
}
