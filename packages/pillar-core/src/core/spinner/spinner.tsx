import { CSSProperties } from 'react'
import { classnames } from '../../utils/classnames'
import { SpinnerProps } from './spinner.type'

const spinner = ({ color = 'primary', size = 'sm', thickness = '2px', invert = false, ...rest }: SpinnerProps) => {
  const className = classnames(`spinner l_size-${size} u_${color}`, {
    [`u_${color}`]: Boolean(color),
    ['spinner__invert']: invert,
  })
  return <div style={{ '--border': thickness } as CSSProperties} className={className} {...rest} />
}

export default spinner
