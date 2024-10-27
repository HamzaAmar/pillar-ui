'use client'

import { ForwardRefComponent, Flex, Text } from '@pillar-ui/core'
import { forwardRef, CSSProperties } from 'react'

import type { ListItemProps } from './aside.type'

export const Item = forwardRef(({ title, level = 1, isActive, children, as: Tag = 'button', icon, ...rest }, ref) => {
  return (
    <div data-active={isActive} className="as-item" style={{ '--lvl': level - 1 } as CSSProperties}>
      <Flex as={Tag} ref={ref} className="as-link" {...rest}>
        <div className="as-icon">
          {icon}
          <Text size="3" transform="capitalize">
            {title}
          </Text>
        </div>
        <span>{children}</span>
      </Flex>
    </div>
  )
}) as ForwardRefComponent<'button', ListItemProps>

Item.displayName = 'MenuItem'
