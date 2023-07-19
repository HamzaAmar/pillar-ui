import { forwardRef } from 'react'
import { ForwardRefComponent } from '../../types/polymorphic.type'
import { classnames } from '@pillar-ui/utils'

import type { BadgeProps } from './badge.type'

const badge = forwardRef((props, ref) => {
  let {
    color = 'primary',
    size = 'md',
    as: Tag = 'div',
    variant = 'numeric',
    corner = 'full',
    className,
    ...rest
  } = props

  const classNames = classnames(`badge u_center u_${color} `, {
    badge__dot: variant === 'dot',
    [className!]: !!className,
    [`u_size-${size}`]: !!size,
    [`u_corner-${corner}`]: !!corner,
  })

  /*
   I make this because dot Variant those not have value and max props and we need this condition
   statement for typescript Look for discriminated union I use Props.variant === 'numeric' does not support
   for destructring with default value
  */
  let displayValue
  const isNumeric = props.variant === 'numeric'

  if (isNumeric) {
    const { number, max } = props
    displayValue = max && number > max ? `${max}+` : number.toString()
  } else if (props.variant === 'icon') {
    displayValue = props.icon
  }

  if (isNumeric && !props.number && !props.showZero) return null

  return (
    <Tag ref={ref} className={classNames} {...rest}>
      {displayValue}
    </Tag>
  )
}) as ForwardRefComponent<'div', BadgeProps>

badge.displayName = 'Pillar-Badge'

export default badge
