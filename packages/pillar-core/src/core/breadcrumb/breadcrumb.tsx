import { forwardRef } from 'react'
import { Flex } from '..'
import type { BreadcrumbProps, BreadcrumbItemProps, BreadcrumbContextProps } from './breadcrumb.type'
import { ForwardRefComponent } from '../../types/polymorphic.type'
import { classnames } from '@pillar-ui/utils'
import { createContext } from '@pillar-ui/utils'

/* 
//////////////////////////////////////////////////////////////////////////////////////////////////
  Breadcrumb Item Section
//////////////////////////////////////////////////////////////////////////////////////////////////
*/

const [BreadcrumbProvider, useBreadcrumbContext] = createContext<BreadcrumbContextProps>({
  name: 'Breadcrumb',
  isContextRequired: true,
})

interface CurrentPage {
  'aria-current'?: 'page'
}

const BreadcrumbItem = forwardRef((props, forwardedRef) => {
  const { separator: contextSeparator = '>' } = useBreadcrumbContext() ?? {}
  const { as = 'a', children, current, separator = contextSeparator, className, ...rest } = props
  const currentPage: CurrentPage = current ? { 'aria-current': 'page' } : {}
  const classNames = classnames(`breadcrumb--link`, { [className!]: !!className })

  return (
    <Flex as="li" gap="sm" className={`breadcrumb--item`}>
      <Flex as={as} ref={forwardedRef} gap="2xs" items="center" {...currentPage} className={classNames} {...rest}>
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

BreadcrumbItem.displayName = 'Pillar-BreadcrumbItem'

/* 
//////////////////////////////////////////////////////////////////////////////////////////////////
  Breadcrumb Section
//////////////////////////////////////////////////////////////////////////////////////////////////
*/

export const Breadcrumb = forwardRef((props, ref) => {
  const { children, separator, size, color = 'primary', className, as: Tag = 'nav', ...rest } = props
  const breadcrumbContext = { separator }
  const classNames = classnames(`breadcrumb--list u_${color}`, {
    [`u_size-${size}`]: !!size,
    [className!]: !!className,
  })

  return (
    <Tag ref={ref} aria-label="Breadcrumb" {...rest}>
      <Flex className={classNames} as="ol" wrap gap="sm">
        <BreadcrumbProvider {...breadcrumbContext}>{children}</BreadcrumbProvider>
      </Flex>
    </Tag>
  )
}) as ForwardRefComponent<'nav', BreadcrumbProps> & { Item: typeof BreadcrumbItem }

Breadcrumb.displayName = 'Pillar-Breadcrumb'

Breadcrumb.Item = BreadcrumbItem
