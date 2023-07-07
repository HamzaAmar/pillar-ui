// import type { CSSProperties } from 'react'
import type { Color, Corner, Size } from '../../types'
import { FlexProps } from '../flex'

type Direction = 'vertical' | 'horizontal'
type Position = FlexProps['justify']

export interface SeparatorProps {
  color?: Color
  corner?: Corner
  thickness?: Size
  direction?: Direction
  position?: Position
  title?: string
}
