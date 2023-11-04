import { forwardRef } from 'react'
import { ForwardRefComponent } from '../../types/polymorphic.type'
import { ChipsProps } from './chips.type'
import { classnames } from '@pillar-ui/utils'

const chips = forwardRef((props, ref) => {
  const {
    size,
    color = 'primary',
    as: Tag = 'span',
    icon,
    iconPosition = 'start',
    variant = 'solid',
    transform,
    corner,
    className,
    children,
    highContrast = false,
    ...rest
  } = props
  const classNames = classnames(`chips chips__${variant} u_${color} u_singleline`, {
    [className!]: !!className,
    [`u_size-${size}`]: !!size,
    [`u_transform__${transform}`]: !!transform,
    [`u_corner-${corner}`]: !!corner,
    'chips__high-contrast': highContrast,
  })

  const startIcon = icon && iconPosition === 'start' && icon
  const endIcon = icon && iconPosition === 'end' && icon

  return (
    <Tag ref={ref} className={classNames} {...rest}>
      {startIcon}
      {children}
      {endIcon}
    </Tag>
  )
}) as ForwardRefComponent<'span', ChipsProps>

chips.displayName = 'Pillar-Chips'

export default chips
