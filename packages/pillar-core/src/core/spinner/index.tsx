import { CSSProperties } from 'react'
import { classnames } from '@pillar-ui/utils'
import { SpinnerProps } from './spinner.type'

export const Spinner = ({ color = 'primary', size, thickness = '2px', invert = false, ...rest }: SpinnerProps) => {
  const className = classnames(`spinner u_${color}`, {
    [`u_${color}`]: !!color,
    ['spinner__invert']: invert,
    [`u_size-${size}`]: !!size,
  })
  return <div style={{ '--border': thickness } as CSSProperties} className={className} {...rest} />
}

export type { SpinnerProps } from './spinner.type'
