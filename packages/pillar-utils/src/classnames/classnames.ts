type ObjectType = Record<string, boolean>

type ClassNamesArg = string | number | ObjectType | Array<string | number> | null | undefined

function processStringOrNumber(arg: string | number, arr: string[]) {
  arr.push(arg.toString())
}

function processArray(arg: Array<string | number>, arr: string[]) {
  arg.forEach((value) => value && arr.push(value.toString()))
}

function processObject(arg: ObjectType, arr: string[]) {
  Object.entries(arg).forEach(([key, value]) => value && arr.push(key))
}

function classnames(...args: ClassNamesArg[]) {
  let classNamesArray: string[] = []

  args.forEach((arg: ClassNamesArg) => {
    if (arg == null) return
    else if (typeof arg === 'string' || typeof arg === 'number') {
      processStringOrNumber(arg, classNamesArray)
    } else if (Array.isArray(arg)) {
      processArray(arg, classNamesArray)
    } else {
      processObject(arg, classNamesArray)
    }
  })
  return classNamesArray.join(' ').trim()
}

export default classnames
