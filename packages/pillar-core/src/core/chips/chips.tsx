import { forwardRef } from 'react'
import { ForwardRefComponent } from '../../types/polymorphic.type'
import { ChipsProps } from './chips.type'
import { classnames } from '../../utils'

const chips = forwardRef((props, ref) => {
  const {
    size = 'md',
    color = 'red',
    as: Tag = 'span',
    variant = 'solid',
    corner = 'full',
    className,
    children,
    ...rest
  } = props
  const _className = classnames(
    `chips chips__${variant} l_size-${size} l_corner-${corner} u_${color} u_singleline u_center`,
    {
      [className!]: !!className,
    }
  )

  return (
    <Tag ref={ref} className={_className} {...rest}>
      <span className="chips--content">{children}</span>
    </Tag>
  )
}) as ForwardRefComponent<'span', ChipsProps>

chips.displayName = 'Pillar-Chips'

export default chips
