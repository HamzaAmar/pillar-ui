import { forwardRef } from 'react'
import { cx } from '../cx'

import type { BlockquoteProps } from './blockquote.type'
import type { ForwardRefComponent } from '../../types/polymorphic.type'

export const Blockquote = forwardRef(
  ({ children, icon, size, color = 'pri', corner, className, cite, ...rest }, ref) => {
    const classNames = cx(`b-l u_${color} l_f-xs u_sh-2xs`, {
      [`u_f-${size}`]: size,
      [`u_rad-${corner}`]: corner,
      [className!]: className,
    })

    return (
      <blockquote ref={ref} className={classNames} cite={cite} {...rest}>
        {icon && <span className="b-l_quote">{icon}</span>}
        {children}
      </blockquote>
    )
  }
) as ForwardRefComponent<'blockquote', BlockquoteProps>

Blockquote.displayName = 'Blockquote'

export type { BlockquoteProps } from './blockquote.type'
