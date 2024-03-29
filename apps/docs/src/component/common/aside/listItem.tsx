import { ForwardRefComponent, Flex } from '@pillar-ui/core'
import { forwardRef, CSSProperties } from 'react'

import type { ListItemProps } from './aside.type'

export const Item = forwardRef(({ text, level = 1, isActive, children, as: Tag = 'button', ...rest }, ref) => {
  return (
    <div data-active={isActive} className="aside--list-item" style={{ '--lvl': level - 1 } as CSSProperties}>
      <Flex as={Tag} ref={ref} className="aside--list-link" {...rest}>
        {text}
        <span>{children}</span>
      </Flex>
    </div>
  )
}) as ForwardRefComponent<'button', ListItemProps>

Item.displayName = 'MenuItem'
