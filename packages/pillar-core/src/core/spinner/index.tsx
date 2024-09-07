import { CSSProperties } from 'react'
import { cx } from '@pillar-ui/utils'
import { SpinnerProps } from './spinner.type'

export const Spinner = ({ color = 'pri', size, thickness = '2px', invert = false, ...rest }: SpinnerProps) => {
  const className = cx(`s-p u_${color}`, {
    [`u_${color}`]: !!color,
    ['s-p-invert']: invert,
    [`u_f-${size}`]: !!size,
  })
  return <div style={{ '--border': thickness } as CSSProperties} className={className} {...rest} />
}

export type { SpinnerProps } from './spinner.type'
