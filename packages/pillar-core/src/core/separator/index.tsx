import { forwardRef } from 'react'
import { ForwardRefComponent } from '../../types/polymorphic.type'
import type { SeparatorProps } from './separator.type'
import { cx } from '@pillar-ui/utils'
import { Flex, FlexProps } from '../flex'

export const Separator = forwardRef((props, ref) => {
  const {
    color = 'bg',
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

  const classNames = cx(`s-e s-e-${direction} u_f-${thickness} u_${color}`, {
    [className!]: !!className,
    [`u_rad-${corner}`]: !!corner,
  })
  return (
    <Flex as={as} {..._direction} className={classNames} ref={ref} {...rest}>
      {title && <span className="s-e_txt">{title}</span>}
    </Flex>
  )
}) as ForwardRefComponent<'div', SeparatorProps>

Separator.displayName = 'Separator'

export type { SeparatorProps } from './separator.type'
