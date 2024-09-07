import { forwardRef } from 'react'
import { cx } from '@pillar-ui/utils'

import type { ForwardRefComponent } from '../../types/polymorphic.type'
import type { ChipsProps } from './chips.type'

export const Chips = forwardRef((props, ref) => {
  const {
    size,
    color = 'pri',
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
  const _className = cx(`c-i u_${variant} u_${color} u_center`, {
    [className!]: !!className,
    [`u_f-${size}`]: !!size,
    [`u_t-${transform}`]: !!transform,
    [`u_rad-${corner}`]: !!corner,
  })

  return (
    <Tag ref={ref} className={_className} {...rest}>
      {icon && iconPosition === 'start' && icon}
      <span className="c-i_cnt u_truncate">{children}</span>
      {icon && iconPosition === 'end' && icon}
    </Tag>
  )
}) as ForwardRefComponent<'span', ChipsProps>

Chips.displayName = 'Chips'

export type { ChipsProps } from './chips.type'
