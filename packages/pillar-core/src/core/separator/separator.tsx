import { forwardRef } from 'react'
import { ForwardRefComponent } from '../../types/polymorphic.type'
import type { SeparatorProps } from './separator.type'
import { classnames } from '@pillar/utils'
import { Flex, FlexProps } from '../flex'

const separator = forwardRef((props, ref) => {
  const {
    color = 'surface',
    direction = 'horizontal',
    position = 'start',
    thickness = 'xs',
    corner,
    as = 'div',
    className,
    title,
    ...rest
  } = props

  const isVertical = direction === 'vertical'

  const _direction: Partial<FlexProps> = {
    items: 'center',
    justify: position,
    ...(isVertical && { direction: 'column' }),
  }

  const classNames = classnames(`separator separator__${direction} u_size-${thickness} u_${color}`, {
    [className!]: !!className,
    [`u_corner-${corner}`]: !!corner,
  })
  return (
    <Flex as={as} {..._direction} className={classNames} ref={ref} {...rest}>
      {title && <span className="separator--text">{title}</span>}
    </Flex>
  )
}) as ForwardRefComponent<'div', SeparatorProps>

separator.displayName = 'Pillar-Separator'

export default separator
