import { forwardRef } from 'react'
import { Flex } from '..'
import type { BreadcrumbProps, BreadcrumbItemProps, BreadcrumbContextProps } from './breadcrumb.type'
import { ForwardRefComponent } from '../../types/polymorphic.type'
import { classnames } from '../../utils'
import { createContext } from '../../utils/context'

/* 
//////////////////////////////////////////////////////////////////////////////////////////////////
  Breadcrumb Item Section
//////////////////////////////////////////////////////////////////////////////////////////////////
*/

const [BreadcrumbProvider, useBreadcrumbContext] = createContext<BreadcrumbContextProps>('Breadcrumb')

interface CurrentPage {
  'aria-current'?: 'page'
}

const Item = forwardRef((props, forwardedRef) => {
  const context = useBreadcrumbContext()
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
      {!current && (
        <span className="u_font-medium" role="presentation">
          {separator}
        </span>
      )}
    </Flex>
  )
}) as ForwardRefComponent<'a', BreadcrumbItemProps>

Item.displayName = 'Pillar-BreadcrumbItem'

/* 
//////////////////////////////////////////////////////////////////////////////////////////////////
  Breadcrumb Section
//////////////////////////////////////////////////////////////////////////////////////////////////
*/

export const Breadcrumb = forwardRef((props, ref) => {
  const { children, separator, size, color = 'indigo', className, as: Tag = 'nav', ...rest } = props
  const context = { separator, size }
  const _className = classnames(`breadcrumb--list u_${color}`, { [className!]: !!className })

  return (
    <Tag ref={ref} aria-label="Breadcrumb" {...rest}>
      <Flex className={_className} as="ol" wrap gap="2xs">
        <BreadcrumbProvider {...context}>{children}</BreadcrumbProvider>
      </Flex>
    </Tag>
  )
}) as ForwardRefComponent<'nav', BreadcrumbProps> & { Item: typeof Item }

Breadcrumb.displayName = 'Pillar-Breadcrumb'

Breadcrumb.Item = Item
