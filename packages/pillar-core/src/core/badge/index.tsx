import { ReactNode, forwardRef } from 'react'
import { ForwardRefComponent } from '../../types/polymorphic.type'
import { cx } from '../utils'

import type { BadgeProps } from './badge.type'

export const Badge = forwardRef((props, ref) => {
  let { variant = 'solid', color = 'pri', as: Tag = 'div', type = 'numeric', size, corner, className, ...rest } = props
  const classNames = cx(`b-a u_${variant} u_center u_${color} u_s-equal`, {
    'b-a_dot': type === 'dot',
    [`u_f-${size}`]: !!size,
    [`u_rad-${corner}`]: !!corner,
    [className!]: !!className,
  })

  /**
   * - If 'type' is 'numeric', it shows a numeric value (with optional max and number value).
   * - If 'type' is 'icon', it displays an icon.
   * The 'dot' variant does not require a value or max props, hence the condition.
   * Note: Destructuring with default values is not supported for 'Props.type'.
   * Consider look for discriminated union to understand the problem Correctly.
   */
  let displayValue: ReactNode
  const isNumeric = props.type === 'numeric'

  if (isNumeric) {
    const { number, max } = props
    displayValue = max && number > max ? `${max}+` : number.toString()
  } else if (props.type === 'icon') {
    displayValue = props.icon
  }

  if (isNumeric && !props.number && !props.showZero) return null

  return (
    <Tag ref={ref} className={classNames} {...rest}>
      <span className="b-a_cnt u_center">{displayValue}</span>
    </Tag>
  )
}) as ForwardRefComponent<'div', BadgeProps>

Badge.displayName = 'Badge'

export type { BadgeProps } from './badge.type'
