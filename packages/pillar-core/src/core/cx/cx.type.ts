type ObjectType = Record<string, any>

export type CxArgs =
  | string
  | number
  | ObjectType
  | Array<string | number | ObjectType | null | undefined>
  | null
  | undefined
