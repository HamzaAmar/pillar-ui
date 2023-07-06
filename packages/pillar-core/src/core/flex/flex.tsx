import { forwardRef } from 'react'
import type { FlexProps } from './flex.type'
import { classnames } from '@pillar/utils'
import type { ForwardRefComponent } from '../../types/polymorphic.type'

/*
===============================================================================================
    Flex Core Component
===============================================================================================
*/

export const Flex = forwardRef((props, forwardedRef) => {
  const { children, justify, items, flex, direction, wrap, inline, as: Tag = 'div', gap, className, ...rest } = props

  const classNames = classnames('flex', {
    [`u_justify-${justify}`]: !!justify && justify !== 'start',
    [`u_items-${items}`]: !!items,
    // [`u_flex-${flex}`]: !!items,
    [`l_direction-${direction}`]: !!direction && direction !== 'row',
    'l_flex-wrap': !!wrap,
    'u_flex-inline': !!inline,
    [`u_spacing-${gap}`]: !!gap,
    [`${className}`!]: !!className,
  })

  return (
    <Tag ref={forwardedRef} className={classNames} {...rest}>
      {children}
    </Tag>
  )
}) as ForwardRefComponent<'div', FlexProps>

Flex.displayName = 'Pillar-Flex'
