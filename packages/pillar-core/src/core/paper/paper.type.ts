// import type { CSSProperties } from 'react'
import type { Corner, CornerBlob, CornerHand, Size, Width, Height } from '../../types'

type Shadow = Corner

type Ratio = '1' | '4-3' | '3-4' | '16-9' | '18-5' | 'golden'
export interface PaperProps {
  p?: Size
  pt?: Size
  pr?: Size
  pb?: Size
  pl?: Size
  m?: Size
  mt?: Size
  mr?: Size
  mb?: Size
  ml?: Size
  flow?: Size
  shadow?: Shadow
  width?: Width
  height?: Height
  border?: boolean
  ratio?: Ratio
  corner?: Corner | CornerBlob | CornerHand
}
