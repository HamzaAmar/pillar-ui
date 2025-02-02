import { ComponentPropsWithoutRef } from 'react'
import { Direction } from '../../types'

export interface FieldsetProps extends ComponentPropsWithoutRef<'fieldset'> {
  hideLegend?: boolean
  legend?: string
  direction?: Direction
}
