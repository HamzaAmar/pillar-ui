import { AriaAttributes } from 'react'
import { Color, Corner, Size } from '../../types'

export interface SliderProps {
  min?: number
  step?: number
  max?: number
  orientation?: AriaAttributes['aria-orientation']
  label: string
  size?: Size
  color?: Color
  corner?: Corner
  disabled?: boolean
  inverted?: boolean
  value?: number
  defaultValue?: number
  pushThumbs?: boolean
  onValueChange?(value: number): void
}

export interface SliderContextProps {
  min?: number
  max?: number
  value?: number
  defaultValue?: number
  onValueChange?(value: number): void
}

export interface SliderMarkProps {
  label: string
  value: number
}

export interface SliderThumbProps {}

export interface SliderTrackProps {}
