import type { Color, Corner, Size } from '../../types'
import type { Dispatch, SetStateAction, ReactNode } from 'react'

interface StepBaseProps {
  children: ReactNode
  color?: Color
  corner?: Corner
  size?: Size
}

export interface StepperProps extends StepBaseProps {
  children: ReactNode
  icon?: ReactNode
  color?: Color
  completedIcon?: ReactNode
  orientation?: 'horizontal' | 'vertical'
  active?: number
  completeComponent: JSX.Element
  setActive: Dispatch<SetStateAction<number>>
}

export interface StepProps extends StepBaseProps {
  title?: string
  description?: string
  icon?: ReactNode
  state?: 'current' | 'inactive' | 'complete'
  step?: number
  setActive?: Dispatch<SetStateAction<number>>
}

export interface StepperProviderProps extends StepBaseProps {
  setActive: Dispatch<SetStateAction<number>>
}
export interface StepperContextProps extends Omit<StepperProviderProps, 'children'> {}
