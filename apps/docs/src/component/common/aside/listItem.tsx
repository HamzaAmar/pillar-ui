import { Flex, Text, ForwardRefComponent } from '@pillar/core'
import type { TableItemProps } from './aside.type'
import { forwardRef } from 'react'
import type { CSSProperties } from 'react'

export const Item = forwardRef(({ text, level = 1, isActive, children, as = 'a', ...rest }, ref) => {
  return (
    <li data-active={isActive} className="aside--list-item" style={{ '--lvl': level - 1 } as CSSProperties}>
      <Text ref={ref} as={as} size="sm" color="surface" className="aside--list-link" contrast="low" {...rest}>
        {text}
        <span>{children}</span>
      </Text>
    </li>
  )
}) as ForwardRefComponent<'a', TableItemProps>

Item.displayName = 'MenuItem'
