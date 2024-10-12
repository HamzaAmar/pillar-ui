import { cx } from '../cx'

import type { CSSProperties } from 'react'
import type { SpinnerProps } from './spinner.type'

export const Spinner = ({ color = 'p', size, thickness = '2px', invert = false, className, ...rest }: SpinnerProps) => {
  const classnames = cx(`sp- C-${color}`, {
    [`C-${color}`]: color,
    ['sp-invert']: invert,
    [`Fs-${size}`]: size,
    [className!]: className,
  })
  return <div style={{ '--border': thickness } as CSSProperties} className={classnames} {...rest} />
}

export type { SpinnerProps } from './spinner.type'
