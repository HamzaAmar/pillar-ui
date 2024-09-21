type ObjectType = Record<string, boolean>

export type CxArgs =
  | string
  | number
  | ObjectType
  | Array<string | number | ObjectType | null | undefined>
  | null
  | undefined
