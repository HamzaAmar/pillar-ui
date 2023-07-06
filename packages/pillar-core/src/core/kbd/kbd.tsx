import { forwardRef } from 'react'
import { classnames } from '@pillar/utils'
import type { KbdProps } from './kbd.type'
import { ForwardRefComponent } from '../../types/polymorphic.type'

const kbd = forwardRef(({ title, color = 'primary', size, corner, className, ...rest }, ref) => {
  const classNames = classnames(`kdb u_${color}`, {
    [`u_size-${size}`]: !!size,
    [`u_corner-${corner}`]: !!corner,
  })
  return (
    <kbd ref={ref} className={classNames} {...rest}>
      {title}
    </kbd>
  )
}) as ForwardRefComponent<'kbd', KbdProps>

kbd.displayName = 'Pillar-Kbd'

export default kbd
