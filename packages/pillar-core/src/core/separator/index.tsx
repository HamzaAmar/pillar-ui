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
    const classNames = cx(`se- se-${direction} Fs-${thickness} fl- Ajc-${position} Aai-center C-${color}`, {
      [`R-${corner}`]: corner,
      'fl-col': direction === 'vertical',
      [className!]: className,
    })
    return (
      <Tag className={classNames} ref={ref} {...rest}>
        {title && <span className="se-T">{title}</span>}
      </Tag>
    )
  }
) as ForwardRefComponent<'div', SeparatorProps>

Separator.displayName = 'Separator'

export type { SeparatorProps } from './separator.type'
