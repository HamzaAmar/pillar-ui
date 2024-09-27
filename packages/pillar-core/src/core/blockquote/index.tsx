import { forwardRef } from 'react'
import { cx } from '../cx'

import type { BlockquoteProps } from './blockquote.type'
import type { ForwardRefComponent } from '../../types/polymorphic.type'

export const Blockquote = forwardRef(({ children, icon, size, color = 'p', corner, className, cite, ...rest }, ref) => {
  const classNames = cx(`b-l C${color} l_f-3 S2`, {
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
}) as ForwardRefComponent<'blockquote', BlockquoteProps>

Blockquote.displayName = 'Blockquote'

export type { BlockquoteProps } from './blockquote.type'
