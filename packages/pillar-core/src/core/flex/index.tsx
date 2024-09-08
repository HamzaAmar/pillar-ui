import { CSSProperties, forwardRef } from 'react'
import type { FlexItemProps, FlexProps } from './flex.type'
import { cx } from '../utils'
import type { ForwardRefComponent } from '../../types/polymorphic.type'

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

  const classNames = cx('f-l', {
    [`u_jus-${justify}`]: !!justify && justify !== 'start',
    [`u_it-${items}`]: !!items,
    // [`l_fl-${flex}`]: !!items,
    [`l_fl-${direction}`]: !!direction && direction !== 'row',
    'l_fl-wrap': !!wrap,
    'l_fl-inline': !!inline,
    [`u_gap-${gap}`]: !!gap,
    [`${className}`!]: !!className,
  })

  return (
    <Tag ref={forwardedRef} className={classNames} {...rest}>
      {children}
    </Tag>
  )
}) as ForwardRefComponent<'div', FlexProps>

Flex.displayName = 'Flex'

export type { FlexProps } from './flex.type'
