import { forwardRef } from 'react'
import { ForwardRefComponent } from '../../types/polymorphic.type'
import { classnames } from '../../utils/classnames'

import type { BadgeProps } from './badge.type'

const badge = forwardRef((props, ref) => {
  let { color = 'primary', size = 'md', variant = 'numeric', corner = 'full', className, ...rest } = props
  let valueToString

  const _className = classnames(`badge l_size-${size} u_center u_${color} l_corner-${corner}`, {
    [className!]: Boolean(className),
    badge__dot: variant === 'dot',
  })

  /*
   I make this because dot Variant those not have value and max props and we need this condition
   statement for typescript Look for discriminated union I use Props.variant === 'numeric' does not support
   for destructring with default value
  */
  if (props.variant === 'numeric') {
    if (!props.number && !props.showZero) return null
    const { number, max } = props
    valueToString = max && number > max ? `${max}+` : number.toString()
  } else if (props.variant === 'icon') {
    valueToString = props.icon
  }

  return (
    <div ref={ref} className={_className} {...rest}>
      {valueToString}
    </div>
  )
}) as ForwardRefComponent<'div', BadgeProps>

badge.displayName = 'Pillar-Badge'

export default badge
