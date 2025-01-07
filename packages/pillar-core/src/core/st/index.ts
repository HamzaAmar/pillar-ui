type CssVariables = Record<string, string | number | undefined | null>

export const st = (styles: CssVariables): Record<string, string | number> =>
  Object.entries(styles).reduce(
    (acc, [key, value]) => {
      if (value != null) acc[`--${key}`] = value
      return acc
    },
    {} as Record<string, string | number>
  )
