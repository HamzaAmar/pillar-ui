import { forwardRef } from 'react'
import { cx } from '../cx'

import type { FlexProps } from './flex.type'
import type { ForwardRefComponent } from '../../types/polymorphic.type'

/*
===============================================================================================
    Flex Core Component
===============================================================================================
*/

export const Flex = forwardRef((props, forwardedRef) => {
  const { children, justify, items, flex, direction, wrap, inline, as: Tag = 'div', gap, className, ...rest } = props

  const classNames = cx('fl-', {
    [`Ajc-${justify}`]: justify && justify !== 'start',
    [`Aai-${items}`]: items,
    [`fl-${direction}`]: direction && direction !== 'row',
    'fl-wrap': wrap,
    'fl-inline': inline,
    [`Sg-${gap}`]: gap,
    [`${className}`!]: className,
  })

  return (
    <Tag ref={forwardedRef} className={classNames} {...rest}>
      {children}
    </Tag>
  )
}) as ForwardRefComponent<'div', FlexProps>

Flex.displayName = 'Flex'

export type { FlexProps } from './flex.type'
