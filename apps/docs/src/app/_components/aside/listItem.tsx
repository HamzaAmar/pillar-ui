import { ForwardRefComponent, Flex } from '~/component/core/pillar'
import { forwardRef, CSSProperties } from 'react'

import type { ListItemProps } from './aside.type'

export const Item = forwardRef(({ title, level = 1, isActive, children, as: Tag = 'button', ...rest }, ref) => {
  return (
    <div data-active={isActive} className="aside--list-item" style={{ '--lvl': level - 1 } as CSSProperties}>
      <Flex as={Tag} ref={ref} className="aside--list-link" {...rest}>
        {title}
        <span>{children}</span>
      </Flex>
    </div>
  )
}) as ForwardRefComponent<'button', ListItemProps>

Item.displayName = 'MenuItem'
