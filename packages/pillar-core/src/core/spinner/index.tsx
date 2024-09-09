import { CSSProperties } from 'react'
import { cx } from '../utils'
import { SpinnerProps } from './spinner.type'

export const Spinner = ({
  color = 'pri',
  size,
  thickness = '2px',
  invert = false,
  className,
  ...rest
}: SpinnerProps) => {
  const classnames = cx(`s-p u_${color}`, {
    [`u_${color}`]: !!color,
    ['s-p-invert']: invert,
    [`u_f-${size}`]: !!size,
    [className!]: !!className,
  })
  return <div style={{ '--border': thickness } as CSSProperties} className={classnames} {...rest} />
}

export type { SpinnerProps } from './spinner.type'
