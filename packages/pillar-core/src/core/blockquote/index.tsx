import { forwardRef } from 'react'
import { cx } from '../cx'

import type { BlockquoteProps } from './blockquote.type'
import type { ForwardRefComponent } from '../../types/polymorphic.type'

export const Blockquote = forwardRef(({ children, icon, size, color = 'p', corner, className, cite, ...rest }, ref) => {
  const classNames = cx(`bl- C-${color} Sf-3 S-2`, {
    [`Fs-${size}`]: size,
    [`R-${corner}`]: corner,
    [className!]: className,
  })

  return (
    <blockquote ref={ref} className={classNames} cite={cite} {...rest}>
      {icon && <span className="bl-Q">{icon}</span>}
      {children}
    </blockquote>
  )
}) as ForwardRefComponent<'blockquote', BlockquoteProps>

Blockquote.displayName = 'Blockquote'

export type { BlockquoteProps } from './blockquote.type'
