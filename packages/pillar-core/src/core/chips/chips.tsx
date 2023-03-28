import { forwardRef } from 'react'
import { ForwardRefComponent } from '../../types/polymorphic.type'
import { ChipsProps } from './chips.type'

// TODO: Add Chips Status partial, full, wait
const chips = forwardRef(({ size = 'md', color = 'red', variant = 'solid', corner = 'full', children }) => {
  return (
    <span className={`chips chips__${size} chips__${variant} l_corner-${corner} u_${color} u_center`}>{children}</span>
  )
}) as ForwardRefComponent<'span', ChipsProps>

chips.displayName = 'Pillar/Chips'

export default chips
