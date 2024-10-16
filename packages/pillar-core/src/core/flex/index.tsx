import { forwardRef } from 'react'
import { cx } from '../cx'

import type { FlexItemProps, FlexProps } from './flex.type'
import type { ForwardRefComponent } from '../../types/polymorphic.type'
import type { CSSProperties } from 'react'
/*
===============================================================================================
    Flex Item Core Component
===============================================================================================
*/

export const FlexItem = forwardRef(
  ({ children, grow = 0, shrink = 1, basis = 'auto', order, as: Tag = 'div', ...rest }, ref) => {
    const classNames = cx()

    return (
      <Tag
        style={{ '--fx': `${grow} ${shrink} ${basis}`, order } as CSSProperties}
        ref={ref}
        className={classNames}
        {...rest}
      >
        {children}
      </Tag>
    )
  }
) as ForwardRefComponent<'div', FlexItemProps>

FlexItem.displayName = 'FlexItem'

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
    // [`fl-${flex}`]: items,
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
