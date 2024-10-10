import { forwardRef } from 'react'
import { cx } from '../cx'

import type { ForwardRefComponent } from '../../types/polymorphic.type'
import type { ChipsProps } from './chips.type'

export const Chips = forwardRef(
  (
    { size, color = 'p', as: Tag = 'span', variant = 'solid', transform, corner, className, children, ...rest },
    ref
  ) => {
    const _className = cx(`c-i shd V-${variant} C-${color}`, {
      [`Fs-${size}`]: size,
      [`Tt-${transform}`]: transform,
      [`R-${corner}`]: corner,
      [className!]: className,
    })

    return (
      <Tag ref={ref} className={_className} {...rest}>
        <span className="c-i_cnt Sg-1 T-1 F-c">{children} </span>
      </Tag>
    )
  }
) as ForwardRefComponent<'span', ChipsProps>

Chips.displayName = 'Chips'

export type { ChipsProps } from './chips.type'
