import { Text, ForwardRefComponent, Flex } from '@pillar/core'
import { forwardRef, CSSProperties } from 'react'

import type { ListItemProps } from './aside.type'

export const Item = forwardRef(({ text, level = 1, isActive, children, as: Tag = 'button', ...rest }, ref) => {
  return (
    <li data-active={isActive} className="aside--list-item" style={{ '--lvl': level - 1 } as CSSProperties}>
      <Flex as={Tag} ref={ref} className="aside--list-link" {...rest}>
        {text}
        <span>{children}</span>
      </Flex>
    </li>
  )
}) as ForwardRefComponent<'button', ListItemProps>

Item.displayName = 'MenuItem'
