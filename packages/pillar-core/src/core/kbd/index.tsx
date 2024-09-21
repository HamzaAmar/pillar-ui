import { forwardRef } from 'react'
import { cx } from '../cx'
import type { KbdProps } from './kbd.type'
import { ForwardRefComponent } from '../../types/polymorphic.type'

export const Kbd = forwardRef(
  ({ title, variant = 'soft', color = 'bg', size, corner, className, transform, ...rest }, ref) => {
    const classNames = cx(`k-d shd u_${variant} u_${color}`, {
      [`u_t-${transform}`]: !!transform,
      [`u_f-${size}`]: !!size,
      [`u_rad-${corner}`]: !!corner,
      [className!]: !!className,
    })
    return (
      <kbd ref={ref} className={classNames} {...rest}>
        {title}
      </kbd>
    )
  }
) as ForwardRefComponent<'kbd', KbdProps>

Kbd.displayName = 'Kbd'

export type { KbdProps } from './kbd.type'
