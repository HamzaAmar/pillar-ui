import { forwardRef } from 'react'
import { ForwardRefComponent } from '../../types/polymorphic.type'
import type { ListItemProps, ListProps } from './list.type'
import { cx } from '../utils'

export const ListItem = ({ children }: ListItemProps) => {
  return <li>{children}</li>
}

ListItem.displayName = 'ListItem'

export const List = forwardRef(({ as: Tag = 'ul', children, flow, hideStyle, ...rest }, forwardedRef) => {
  const classNames = cx(`l-i  l_f-${flow}`, { 'list--show-list': !!hideStyle })

  return (
    <Tag className={classNames} ref={forwardedRef} {...rest}>
      {children}
    </Tag>
  )
}) as ForwardRefComponent<'ul', ListProps>
List.displayName = 'List'

export type { ListItemProps, ListProps } from './list.type'
