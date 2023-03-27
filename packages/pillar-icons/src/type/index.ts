import type { SVGProps } from 'react'
import { ROTATION } from '../shared'

export type Rotation = 'bottom' | 'top' | 'right' | 'left' | 'left-top' | 'left-bottom' | 'right-bottom' | 'right-top'
export interface SvgType extends SVGProps<SVGSVGElement> {}
export interface SvgWithDirection extends SvgType {
  direction?: keyof typeof ROTATION
}
