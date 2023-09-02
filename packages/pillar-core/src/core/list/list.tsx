import { forwardRef } from 'react'
import { ForwardRefComponent } from '../../types/polymorphic.type'
import type { ListItemProps, ListProps } from './list.type'
import { classnames } from '@pillar-ui/utils'

const listItem = ({ children }: ListItemProps) => {
  return <li>{children}</li>
}

listItem.displayName = 'Pillar-ListItem'

const list = forwardRef(({ as: Tag = 'ul', children, flow, hideStyle, ...rest }, forwardedRef) => {
  const classNames = classnames(`list  l_flow__${flow}`, { 'list--show-list': !!hideStyle })

  return (
    <Tag className={classNames} ref={forwardedRef} {...rest}>
      {children}
    </Tag>
  )
}) as ForwardRefComponent<'ul', ListProps> & {
  Item: typeof listItem
}

list.displayName = 'Pillar-List'

list.Item = listItem

export default list
