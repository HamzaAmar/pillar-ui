import type { SVGProps } from 'react'

export type Orientation = 'b' | 't' | 'r' | 'l' | 'lt' | 'lb' | 'rb' | 'rt'
export interface SvgType extends SVGProps<SVGSVGElement> {
  o?: Orientation
}
