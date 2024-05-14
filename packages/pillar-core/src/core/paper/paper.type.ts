// import type { CSSProperties } from 'react'
import { CSSProperties } from 'react'
import type { Color, Corner, Size, Width } from '../../types'

type Step = '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10' | '11' | '12'
type ColorShade = Color | `${Color}-${Step}`
type Shadow = Corner

export interface Margin {
  m?: string
  mt?: string
  mr?: string
  mb?: string
  ml?: string
  mtb?: string
  mlr?: string
}

export interface Padding {
  p?: string
  pt?: string
  pr?: string
  pb?: string
  pl?: string
  ptb?: string
  plr?: string
}

export interface Border {
  b?: string
  bt?: string
  br?: string
  bb?: string
  bl?: string
  btb?: string
  blr?: string
}

export type Ratio = 'square' | 'landscape' | 'portrait' | 'widescreen' | 'ultrawide' | 'golden'
export interface PaperProps extends Padding, Margin, Border {
  background?: ColorShade
  // color : 'danger' | 'danger' | 'success' | 'success' | 'orange' | 'warning' | 'primary'
  color?: ColorShade
  // corner types 'sharp' | 'xs' | 'sm'  | 'md' | 'lg' | 'xl'| 'circle' | 'full'
  corner?: Corner
  // size types '2xs' | 'xs' | 'sm'  | 'md' | 'lg' | 'xl'| '2xl'
  padding?: Size
  flow?: Size
  shadow?: Shadow
  width?: Width
  height?: CSSProperties['height']
  borderPosition?: 'left' | 'right' | 'top' | 'bottom' | 'block' | 'inline' | 'all'
  borderStyle?: CSSProperties['borderStyle']
  borderColor?: ColorShade
  borderWidth?: CSSProperties['borderStyle']
  ratio?: Ratio
}
