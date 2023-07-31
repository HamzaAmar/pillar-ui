/**
 * Checks if an object has a specific key.
 * @template O - The object type.
 * @param {O} obj - The object to check.
 * @param {PropertyKey} key - The key to check for.
 * @returns {boolean} Returns true if the object has the specified key, false otherwise.
 * @example
 * const person = { name: 'John', age: 30 };
 * hasKey(person, 'name'); // true
 * hasKey(person, 'gender'); // false
 */
export function hasKey<O extends Object>(obj: O, key: PropertyKey): key is keyof O {
  return key in obj
}

/**
 * Checks if an HTML element has a specific class name.
 * @param {HTMLElement} element - The HTML element to check.
 * @param {string} className - The class name to check for.
 * @returns {boolean} Returns true if the element has the specified class name, false otherwise.
 * @example
 * const element = document.getElementById('myElement');
 * hasClassName(element, 'active'); // true if 'myElement' has the class 'active'
 */

export function hasClassName(element: HTMLElement, className: string): boolean {
  return element.classList.contains(className)
}

/**
 * Checks if an object has all the specified keys.
 * @template O - The object type.
 * @param {O} obj - The object to check.
 * @param {PropertyKey[]} keys - An array of keys to check for.
 * @returns {boolean} Returns true if the object has all the specified keys, false otherwise.
 * @example
 * const person = { name: 'John', age: 30, gender: 'Male' };
 * hasAllKeys(person, ['name', 'age']); // true
 * hasAllKeys(person, ['name', 'address']); // false
 */

export function hasAllKeys<O extends Object>(obj: O, keys: PropertyKey[]): keys is Array<keyof O> {
  return keys.every((key) => key in obj)
}

/**
 * Checks if an HTML element or any of its descendants has the focus.
 * @param {HTMLElement | null} element - The HTML element to check.
 * @returns {boolean} Returns true if the element or any of its descendants has the focus, false otherwise.
 * @example
 * const element = document.getElementById('myElement');
 * hasFocus(element); // true if 'myElement' or any of its descendants has the focus
 */
export const hasFocus = (element: HTMLElement | null): boolean => {
  if (!element) {
    return false
  }

  return document.activeElement === element
}

/**
 * Checks if an HTML element or any of its descendants has the focus within it.
 * @param {HTMLElement | null} element - The HTML element to check.
 * @returns {boolean} Returns true if the element or any of its descendants has the focus, false otherwise.
 * @example
 * const element = document.getElementById('myElement');
 * hasFocusWithin(element); // true if 'myElement' or any of its descendants has the focus
 */

export const hasFocusWithin = (element: HTMLElement | null): boolean => {
  if (!element) {
    return false
  }

  return element.contains(document.activeElement)
}

/**
 * Checks if an array contains duplicate elements.
 * @template T - The array element type.
 * @param {T[]} array - The array to check.
 * @returns {boolean} Returns true if the array contains duplicate elements, false otherwise.
 * @example
 * const numbers = [1, 2, 3, 3, 4];
 * hasDuplicates(numbers); // true
 * hasDuplicates([1, 2, 3, 4, 5]); // false
 */
export function hasDuplicates<T>(array: T[]): boolean {
  return new Set(array).size !== array.length
}

/**
 * Checks if two arrays have at least one common element.
 * @template T - The array element type.
 * @param {T[]} array1 - The first array to check.
 * @param {T[]} array2 - The second array to check.
 * @returns {boolean} Returns true if the two arrays have at least one common element, false otherwise.
 * @example
 * const array1 = [1, 2, 3];
 * const array2 = [3, 4, 5];
 * hasIntersection(array1, array2); // true
 * hasIntersection([1, 2, 3], [4, 5, 6]); // false
 */

export function hasIntersection<T>(array1: T[], array2: T[]): boolean {
  return array1.some((item) => array2.includes(item))
}
