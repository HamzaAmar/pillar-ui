import { CSSProperties } from 'react'
import { classnames } from '../../utils/classnames'
import { SpinnerProps } from './spinner.type'

const spinner = ({ color = 'primary', size = 'sm', thickness = '2px', ...rest }: SpinnerProps) => {
  const className = classnames(`spinner spinner__${size} u_${color}`, {
    [`u_${color}`]: Boolean(color),
  })
  return <div style={{ '--border': thickness } as CSSProperties} className={className} {...rest} />
}

export default spinner
