import type { Color, Size } from '../../types'
import { ReactNode } from 'react'

interface ProgressCoreProps {
  color?: Color
  size?: Size
  showValue?: boolean
  label: string
  value: number
  min?: number
  max?: number
}

export interface ProgressBarStackItemProps extends Omit<ProgressCoreProps, 'size'> {
  children: ReactNode
}
export interface ProgressBarStackProps {
  children: ReactNode
  size?: Size
  label: string
}

export interface ProgressBarProps extends ProgressCoreProps {}
export interface ProgressCircleProps extends ProgressCoreProps {}
