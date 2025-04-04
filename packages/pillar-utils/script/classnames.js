const Benchmark = require('benchmark')

// Define the functions
// function classnames1(input) {
//   return input
//     .split(' ')
//     .filter((word) => word.length < 9 && (!word.includes('undefined') || !word.includes('null')))
//     .join(' ')
//     .trim()
// }

/**
 * Combines a base class string with conditional classes, filtering out unwanted terms.
 *
 * @param {string} baseClasses - The base class string that will always be included.
 * @param {string} conditional - Space-separated string of conditional classes to be filtered.
 * @returns {string} A combined string of base classes and filtered conditional classes.
 *
 * @example
 * // Returns "btn btn-primary large"
 * combineClassNames("btn btn-primary", "large undefined-class null-class");
 *
 * @example
 * // Returns "card active"
 * combineClassNames("card", "active hidden null undefined");
 */
export function classnames1(cls, conditional) {
  const str = conditional
    .split(' ')
    .filter((t) => t.length < 4 || (!t.includes('undefined') && !t.includes('null')))
    .join(' ')

  return `${cls} ${str}`.trim()
}

function classnames2(...args) {
  let classNames = []

  for (let arg of args) {
    if (arg == null) continue
    else if (typeof arg === 'string' || typeof arg === 'number') {
      classNames.push(arg.toString())
    } else if (Array.isArray(arg)) {
      arg.forEach((value) => value && classNames.push(value.toString()))
    } else {
      Object.entries(arg).forEach(([key, value]) => value && classNames.push(key))
    }
  }

  return classNames.join(' ').trim()
}

function generateRandomString() {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
  const length = Math.floor(Math.random() * (25 - 2 + 1)) + 2
  let result = ''

  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length))
  }

  return result
}

// Generate 1000 class names
const classNamesArray = Array.from({ length: 1000 }, (_, i) => `${generateRandomString()}${i}`)

const classnames1Input = classNamesArray.map((className, i) => (i % 2 === 0 ? className : 'u_undefined')).join(' ')

const classnames2Input = classNamesArray.reduce((acc, className, i) => {
  acc[className] = i % 2 === 0
  return acc
}, {})

// console.log(
//   classnames1Input,
//   '\n=============================================================================\n',
//   classnames1(classnames1Input),
//   '\n=============================================================================\n',
//   classnames2Input,
//   '\n=============================================================================\n',
//   classnames2(classnames2Input)
// )

// Benchmark setup
const suite = new Benchmark.Suite()

suite
  .add('classnames1 - 1000 classes with undefined', function () {
    classnames1(classnames1Input)
  })
  .add('classnames2 - 1000 classes with boolean values', function () {
    classnames2(classnames2Input)
  })
  // Add listeners for the benchmark results
  .on('cycle', function (event) {
    console.log(String(event.target))
  })
  .on('complete', function () {
    console.log('Fastest is ' + this.filter('fastest').map('name'))
  })
  // Run the benchmark asynchronously
  .run({ async: true })
