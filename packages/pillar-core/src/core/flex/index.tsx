import { CSSProperties, forwardRef } from 'react'
import type { FlexItemProps, FlexProps } from './flex.type'
import { classnames } from '@pillar-ui/utils'
import type { ForwardRefComponent } from '../../types/polymorphic.type'

/*
===============================================================================================
    Flex Item Core Component
===============================================================================================
*/

export const FlexItem = forwardRef(
  ({ children, grow = 0, shrink = 1, basis = 'auto', order, as: Tag = 'div', ...rest }, ref) => {
    const classNames = classnames()

    return (
      <Tag
        style={{ '--flex': `${grow} ${shrink} ${basis}`, order } as CSSProperties}
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

  const classNames = classnames('f-l', {
    [`u_justify-${justify}`]: !!justify && justify !== 'start',
    [`u_items-${items}`]: !!items,
    // [`u_flex-${flex}`]: !!items,
    [`l_direction-${direction}`]: !!direction && direction !== 'row',
    'l_flex-wrap': !!wrap,
    'u_flex-inline': !!inline,
    [`u_space-${gap}`]: !!gap,
    [`f-l-gap`]: !!gap,
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
