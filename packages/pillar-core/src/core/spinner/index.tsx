import { cx } from '../cx'
import type { SpinnerProps } from './spinner.type'

export const Spinner = ({ color = 'p', size, thickness = '2', invert = false, className, ...rest }: SpinnerProps) => {
  const classnames = cx(`sp- C-${color} sp-${thickness}`, {
    ['sp-invert']: invert,
    [`Fs-${size}`]: size,
    [className!]: className,
  })
  return <div className={classnames} {...rest} />
}

export type { SpinnerProps } from './spinner.type'
