// import type { CSSProperties } from 'react'
import { CSSProperties } from 'react'
import type { Color, Corner, Size } from '../../types'

type Step = '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10' | '11' | '12'
type ColorShade = Color | `${Color}-${Step}`
type Shadow = Corner
export interface PaperProps {
  background?: ColorShade
  // color : 'red' | 'danger' | 'success' | 'green' | 'orange' | 'warning' | 'indigo'
  color?: ColorShade
  // corner types 'sharp' | 'xs' | 'sm'  | 'md' | 'lg' | 'xl'| 'circle' | 'full'
  corner?: Corner
  // size types '2xs' | 'xs' | 'sm'  | 'md' | 'lg' | 'xl'| '2xl'
  padding?: Size
  spacing?: Omit<Size, '2xl' | '2xs'>
  shadow?: Shadow
  width?: CSSProperties['width']
  height?: CSSProperties['height']
}
