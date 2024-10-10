import { forwardRef } from 'react'
import { cx } from '../cx'

import type { ForwardRefComponent } from '../../types/polymorphic.type'
import type { CodeProps } from './code.type'

export const Code = forwardRef(
  ({ as: Tag = 'code', color = 'b', size, corner, children, transform, className, ...rest }, ref) => {
    const classNames = cx(`c-o V-soft C-${color}`, {
      [`Fs-${size}`]: size,
      [`Tt-${transform}`]: transform,
      [`R-${corner}`]: corner,
      [className!]: className,
    })

    return (
      <Tag ref={ref} className={classNames} {...rest}>
        {children}
      </Tag>
    )
  }
) as ForwardRefComponent<'code', CodeProps>

Code.displayName = 'Code'

export type { CodeProps } from './code.type'
