// import type { CSSProperties } from 'react'
import { CSSProperties } from 'react'
import type { Color, Corner, CornerBlob, CornerHand, Size, Width } from '../../types'

type Step = '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10' | '11' | '12'
type ColorShade = Color | `${Color}-${Step}`
type Shadow = Corner

export type Ratio = 'square' | 'landscape' | 'portrait' | 'widescreen' | 'ultrawide' | 'golden'
export interface PaperProps {
  background?: ColorShade
  color?: ColorShade
  // corner types 'sharp' | 'xs' | 'sm'  | 'md' | 'lg' | 'xl'| 'circle' | 'full'
  corner?: Corner | CornerBlob | CornerHand
  // size types '2xs' | 'xs' | 'sm'  | 'md' | 'lg' | 'xl'| '2xl'
  p?: Size
  m?: Size
  flow?: Size
  shadow?: Shadow
  width?: Width
  height?: CSSProperties['height']
  border?: boolean
  ratio?: Ratio
}
