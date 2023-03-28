function classnames(...args: any) {
  let newString = ''

  args.forEach((arg: any) => {
    if (arg && (typeof arg === 'string' || typeof arg === 'number')) {
      newString += `${arg} `
    } else if (typeof arg === 'object' && arg) {
      if (Array.isArray(arg)) {
        arg.forEach((value: any) => {
          if (value) {
            newString += `${value} `
          }
        })
      } else {
        Object.entries(arg).forEach(([key, value]: any) => {
          if (value) {
            newString += `${key} `
          }
        })
      }
    }
  })
  return newString.trimEnd()
}

export default classnames
