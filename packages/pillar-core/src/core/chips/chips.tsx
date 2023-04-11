import { forwardRef } from 'react'
import { ForwardRefComponent } from '../../types/polymorphic.type'
import { ChipsProps } from './chips.type'
import { classnames } from '../../utils'

const chips = forwardRef(
  ({ size = 'md', color = 'red', variant = 'solid', corner = 'full', className, children, ...rest }, ref) => {
    const _className = classnames(
      `chips l_size-${size} chips__${variant} l_corner-${corner} u_${color} u_singleline u_center`,
      { [className!]: !!className }
    )

    return (
      <span ref={ref} className={_className} {...rest}>
        <span className="chips--content">{children}</span>
      </span>
    )
  }
) as ForwardRefComponent<'span', ChipsProps>

chips.displayName = 'Pillar/Chips'

export default chips
