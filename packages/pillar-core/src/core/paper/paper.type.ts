// import type { CSSProperties } from 'react'
import type { Color, Corner, CornerBlob, CornerHand, Size, Width, Height } from '../../types'

type Step = '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10' | '11' | '12'
type ColorShade = Color | `${Color}-${Step}`
type Shadow = Corner

type Ratio = '1' | '4-3' | '3-4' | '16-9' | '18-5' | 'golden'
export interface PaperProps {
  background?: ColorShade
  color?: ColorShade
  corner?: Corner | CornerBlob | CornerHand
  p?: Size
  m?: Size
  flow?: Size
  shadow?: Shadow
  width?: Width
  height?: Height
  border?: boolean
  ratio?: Ratio
}
