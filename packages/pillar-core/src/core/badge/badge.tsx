import { forwardRef } from 'react'
import { ForwardRefComponent } from '../../types/polymorphic.type'
import { classnames } from '../../utils/classnames'

import type { BadgeProps } from './badge.type'

const badge = forwardRef((props) => {
  const { color = 'primary', size = 'md', variant = 'numeric', corner = 'full', className, ...rest } = props
  let valueToString

  /*
   I make this because dot Variant those not have value and max props and we need this condition
   statement for typescript Look for discriminated union I use Props.variant === 'numeric' does not support
   for destructring with default value
  */
  if (props.variant === 'numeric' && props.value) {
    const { value, max } = props
    valueToString = max && value > max ? `${max}+` : value.toString()
  } else if (props.variant === 'icon') {
    valueToString = props.icon
  }
  const classNames = classnames(`badge badge__${variant} badge__${size} u_center u_${color} l_corner-${corner}`, {
    [className!]: Boolean(className),
  })

  return (
    <div className={classNames} {...rest}>
      {valueToString}
    </div>
  )
}) as ForwardRefComponent<'div', BadgeProps>

badge.displayName = 'Pillar-Badge'

export default badge
