import { ReactNode, forwardRef } from 'react'
import { cx } from '../cx'

import type { ForwardRefComponent } from '../../types/polymorphic.type'
import type { BadgeProps } from './badge.type'

export const Badge = forwardRef((props, ref) => {
  let { variant = 'solid', color = 'pri', as: Tag = 'div', type = 'numeric', size, corner, className, ...rest } = props
  const classNames = cx(`b-a shd u_${variant} u_center u_${color}`, {
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

  if (props.type === 'numeric') {
    const { number, max, showZero } = props
    if (!number && !showZero) return
    displayValue = max && number > max ? `${max}+` : `${number}`
  } else if (props.type === 'icon') {
    displayValue = props.icon
  }

  return (
    <Tag ref={ref} className={classNames} {...rest}>
      <span className="b-a_cnt u_center">{displayValue}</span>
    </Tag>
  )
}) as ForwardRefComponent<'div', BadgeProps>

Badge.displayName = 'Badge'

export type { BadgeProps } from './badge.type'
