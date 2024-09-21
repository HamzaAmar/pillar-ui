import { forwardRef } from 'react'
import { ForwardRefComponent } from '../../types/polymorphic.type'
import type { SeparatorProps } from './separator.type'
import { cx } from '../cx'

export const Separator = forwardRef(
  (
    {
      color = 'bg',
      direction = 'horizontal',
      position = 'start',
      thickness = 'xs',
      corner,
      as: Tag = 'div',
      className,
      title,
      ...rest
    },
    ref
  ) => {
    const classNames = cx(`s-e s-e-${direction} u_f-${thickness} f-l u_jus-${position} u_it-center u_${color}`, {
      [`u_rad-${corner}`]: !!corner,
      'l_fl-column': direction === 'vertical',
      [className!]: !!className,
    })
    return (
      <Tag className={classNames} ref={ref} {...rest}>
        {title && <span className="s-e_txt">{title}</span>}
      </Tag>
    )
  }
) as ForwardRefComponent<'div', SeparatorProps>

Separator.displayName = 'Separator'

export type { SeparatorProps } from './separator.type'
