import { forwardRef } from 'react'
import { Flex } from '..'
import type { BreadcrumbProps, BreadcrumbItemProps } from './breadcrumb.type'
import { BreadcrumbProvider, useBreadcrumb } from './context'
import { ForwardRefComponent } from '../../types/polymorphic.type'
import { classnames } from '../../utils'

/* 
======================================================================================================
Breadcrumb Item Section
======================================================================================================
*/

interface CurrentPage {
  'aria-current'?: 'page'
}

const Item = forwardRef((props, forwardedRef) => {
  const context = useBreadcrumb()
  const {
    as = 'a',
    children,
    current,
    size = context?.size ?? 'md',
    separator = context?.separator ?? '>',
    className,
    ...rest
  } = props
  const currentPage: CurrentPage = current ? { 'aria-current': 'page' } : {}
  const _className = classnames(`breadcrumb--link`, { [className!]: !!className })

  return (
    <Flex as="li" gap="2xs" className={`breadcrumb--item l_size-${size}`}>
      <Flex as={as} ref={forwardedRef} gap="2xs" items="center" {...currentPage} className={_className} {...rest}>
        {children}
      </Flex>
      {current ? null : (
        <span className="u_font-medium" role="presentation">
          {separator}
        </span>
      )}
    </Flex>
  )
}) as ForwardRefComponent<'a', BreadcrumbItemProps>

Item.displayName = 'Pillar-BreadcrumbItem'

/* 
======================================================================================================
Breadcrumb Section
======================================================================================================
*/

export const Breadcrumb = ({ children, separator, size, color = 'indigo' }: BreadcrumbProps) => {
  const context = { separator, size }
  return (
    <nav aria-label="Breadcrumb">
      <Flex className={`breadcrumb--list u_${color}`} as="ol" wrap gap="2xs">
        <BreadcrumbProvider {...context}> {children}</BreadcrumbProvider>
      </Flex>
    </nav>
  )
}

Breadcrumb.Item = Item
