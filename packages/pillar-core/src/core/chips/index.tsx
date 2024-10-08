import { forwardRef } from 'react'
import { cx } from '../cx'

import type { ForwardRefComponent } from '../../types/polymorphic.type'
import type { ChipsProps } from './chips.type'

export const Chips = forwardRef(
  (
    { size, color = 'pri', as: Tag = 'span', variant = 'solid', transform, corner, className, children, ...rest },
    ref
  ) => {
    const _className = cx(`c-i shd u_${variant} u_${color}`, {
      [`u_f-${size}`]: size,
      [`u_t-${transform}`]: transform,
      [`u_rad-${corner}`]: corner,
      [className!]: className,
    })

    return (
      <Tag ref={ref} className={_className} {...rest}>
        <span className="c-i_cnt u_gap-3xs u_truncate u_center">{children} </span>
      </Tag>
    )
  }
) as ForwardRefComponent<'span', ChipsProps>

Chips.displayName = 'Chips'

export type { ChipsProps } from './chips.type'
