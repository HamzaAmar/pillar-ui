import { describe, it, expect } from 'vitest'
import { formatDate } from '../date'

describe('formatDate', () => {
  it('should format a date according to the specified format', () => {
    const date = new Date('2022-01-15T12:34:56')
    const format = 'yyyy-MM-dd HH:mm:ss'
    const formattedDate = formatDate(date, format)

    expect(formattedDate).toEqual('2022-01-15 12:34:56')
  })

  it('should format a date with padded values for single-digit months, days, hours, minutes, and seconds', () => {
    const date = new Date('2022-03-05T05:06:07')
    const format = 'MM/dd/yyyy HH:mm:ss'
    const formattedDate = formatDate(date, format)

    expect(formattedDate).toEqual('03/05/2022 05:06:07')
  })

  it('should handle formats without time components', () => {
    const date = new Date('2022-12-31T23:59:59')
    const format = 'yyyy-MM-dd'
    const formattedDate = formatDate(date, format)

    expect(formattedDate).toEqual('2022-12-31')
  })

  it('should handle formats without date components', () => {
    const date = new Date('2022-06-15T12:34:56')
    const format = 'HH:mm:ss'
    const formattedDate = formatDate(date, format)

    expect(formattedDate).toEqual('12:34:56')
  })

  it('should handle formats with only year and month components', () => {
    const date = new Date('2022-11-01T00:00:00')
    const format = 'yyyy/MM'
    const formattedDate = formatDate(date, format)

    expect(formattedDate).toEqual('2022/11')
  })

  it('should handle formats with custom separators', () => {
    const date = new Date('2022-09-15T12:34:56')
    const format = 'yyyy|MM|dd HH-mm-ss'
    const formattedDate = formatDate(date, format)

    expect(formattedDate).toEqual('2022|09|15 12-34-56')
  })

  it('should handle formats with escaped characters', () => {
    const date = new Date('2022-04-10T15:30:45')
    const format = 'MM\\dd\\yyyy HH\\mm\\ss'
    const formattedDate = formatDate(date, format)

    expect(formattedDate).toEqual('04\\10\\2022 15\\30\\45')
  })

  it('should return an empty string if the date is invalid', () => {
    const date = new Date('invalid')
    const format = 'yyyy-MM-dd HH:mm:ss'
    const formattedDate = formatDate(date, format)

    expect(formattedDate).toEqual('')
  })
})
