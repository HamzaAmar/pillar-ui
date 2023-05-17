import { forwardRef } from 'react'
import { ForwardRefComponent } from '../../types/polymorphic.type'
import type { SeparatorProps } from './separator.type'
import { classnames } from '../../utils'
import { Flex, FlexProps } from '../layout'

const separator = forwardRef((props, ref) => {
  const {
    color = 'slate',
    direction = 'horizontal',
    position = 'start',
    thickness = 'xs',
    corner = 'circle',
    as = 'div',
    className,
    title,
    ...rest
  } = props

  const isVertical = direction === 'vertical'
  const _direction: Partial<FlexProps> = isVertical
    ? { direction: 'column', items: 'center', justify: position }
    : { items: 'center', justify: position }

  const _className = classnames(`separator separator__${direction} l_corner-${corner} l_size-${thickness} u_${color}`, {
    [className!]: !!className,
  })
  return (
    <Flex as={as} {..._direction} className={_className} ref={ref} {...rest}>
      {title && <span className="separator--text">{title}</span>}
    </Flex>
  )
}) as ForwardRefComponent<'div', SeparatorProps>

separator.displayName = 'Pillar-Separator'

export default separator
