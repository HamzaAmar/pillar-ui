import { forwardRef } from 'react'
import { classnames } from '@pillar-ui/utils'

import type { ForwardRefComponent } from '../../types/polymorphic.type'
import type { ChipsProps } from './chips.type'

export const Chips = forwardRef((props, ref) => {
  const {
    size,
    color = 'primary',
    as: Tag = 'span',
    icon,
    iconPosition = 'start',
    variant = 'solid',
    transform,
    corner,
    className,
    children,
    ...rest
  } = props
  const _className = classnames(`chips u_${variant} u_${color} u_center`, {
    [className!]: !!className,
    [`u_size-${size}`]: !!size,
    [`u_transform__${transform}`]: !!transform,
    [`u_corner-${corner}`]: !!corner,
  })

  return (
    <Tag ref={ref} className={_className} {...rest}>
      {icon && iconPosition === 'start' && icon}
      <span className="chips--content u_truncate">{children}</span>
      {icon && iconPosition === 'end' && icon}
    </Tag>
  )
}) as ForwardRefComponent<'span', ChipsProps>

Chips.displayName = 'Chips'

export type { ChipsProps } from './chips.type'
