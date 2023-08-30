import type { ReactNode } from 'react'
import type { Color, Corner, Size } from '../../types'
import type { TypographyProps } from '../typography'

export interface BlockquoteProps {
  color?: Color
  size?: Size
  corner?: Corner
  icon?: ReactNode
}

export type CiteProps = TypographyProps & {
  title: string
}
