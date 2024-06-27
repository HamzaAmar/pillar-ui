import React from 'react'
import { describe, test, expect } from 'vitest'
import { isReactElement } from '..'

describe('isReactElement', () => {
  test('should return true for valid React elements', () => {
    const element = <div>Hello, World!</div>
    expect(isReactElement(element)).toBe(true)
    const element2 = React.cloneElement(element, { size: 'sm', style: { backgroundColor: 'danger' } })
    expect(isReactElement(element2)).toBe(true)
    const element3 = React.createElement('div', { size: 'sm' }, <div>Hello, World!</div>)
    expect(isReactElement(element3)).toBe(true)
  })

  test('should return false for non-React elements', () => {
    expect(isReactElement(null)).toBe(false)
    expect(isReactElement(undefined)).toBe(false)
    expect(isReactElement({})).toBe(false)
    expect(isReactElement([])).toBe(false)
    expect(isReactElement('text')).toBe(false)
    expect(isReactElement(42)).toBe(false)
  })

  test('should return false for React.Fragment', () => {
    const fragment = <React.Fragment></React.Fragment>
    expect(isReactElement(fragment)).toBe(false)
  })

  test('should return false for React elements without children', () => {
    const elementWithoutChildren = <div />
    expect(isReactElement(elementWithoutChildren)).toBe(false)
  })
})
