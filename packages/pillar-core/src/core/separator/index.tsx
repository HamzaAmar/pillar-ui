import { forwardRef } from 'react'
import { cx } from '../cx'

import type { SeparatorProps } from './separator.type'
import type { ForwardRefComponent } from '../../types/polymorphic.type'

export const Separator = forwardRef(
  (
    {
      color = 'b',
      direction = 'horizontal',
      position = 'start',
      thickness = '3',
      corner,
      as: Tag = 'div',
      className,
      title,
      ...rest
    },
    ref
  ) => {
    const classNames = cx(`s-e s-e-${direction} Fs${thickness} f-l Ajc-${position} Aai-center C${color}`, {
      [`R${corner}`]: corner,
      'l_fl-column': direction === 'vertical',
      [className!]: className,
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
