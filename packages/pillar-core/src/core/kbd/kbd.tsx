import { forwardRef } from 'react'
import { classnames } from '../../utils'
import type { KbdProps } from './kbd.type'
import { ForwardRefComponent } from '../../types/polymorphic.type'

const kbd = forwardRef(({ title, color, size = 'md', corner = 'xs', className, ...rest }, ref) => {
  const _className = classnames(`kdb u_${color} l_size-${size} l_corner-${corner}`)
  return (
    <kbd ref={ref} className={_className} {...rest}>
      {title}
    </kbd>
  )
}) as ForwardRefComponent<'kbd', KbdProps>

kbd.displayName = 'Pillar-Kbd'

export default kbd
