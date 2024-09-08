import { forwardRef } from 'react'
import { Flex } from '../flex'
import type { BreadcrumbProps, BreadcrumbItemProps, BreadcrumbContextProps, CurrentPage } from './breadcrumb.type'
import { ForwardRefComponent } from '../../types/polymorphic.type'
import { cx, context } from '../utils'

/* 
//////////////////////////////////////////////////////////////////////////////////////////////////
  Breadcrumb Item Section
//////////////////////////////////////////////////////////////////////////////////////////////////
*/

const [BreadcrumbProvider, useBreadcrumbContext] = context<BreadcrumbContextProps>({
  name: 'Breadcrumb',
  isRequired: true,
})

export const BreadcrumbItem = forwardRef((props, forwardedRef) => {
  const { separator: contextSeparator = '/' } = useBreadcrumbContext() ?? {}
  const { as = 'a', children, current, separator = contextSeparator, className, ...rest } = props
  const currentPage: CurrentPage = current ? { 'aria-current': 'page' } : {}
  const classNames = cx(`b-r_lnk`, { [className!]: !!className })

  return (
    <Flex as="li" gap="sm" className={`b-r_itm`}>
      <Flex as={as} ref={forwardedRef} gap="2xs" items="center" {...currentPage} className={classNames} {...rest}>
        {children}
      </Flex>
      {!current && (
        <span className="u_f-medium" role="presentation">
          {separator}
        </span>
      )}
    </Flex>
  )
}) as ForwardRefComponent<'a', BreadcrumbItemProps>

BreadcrumbItem.displayName = 'BreadcrumbItem'

/* 
//////////////////////////////////////////////////////////////////////////////////////////////////
  Breadcrumb Section
//////////////////////////////////////////////////////////////////////////////////////////////////
*/

export const Breadcrumb = forwardRef((props, ref) => {
  const { children, separator, size, color = 'bg', className, as: Tag = 'nav', ...rest } = props
  const breadcrumbContext = { separator }
  const classNames = cx(`u_${color}`, {
    [`u_f-${size}`]: !!size,
    [className!]: !!className,
  })

  return (
    <Tag ref={ref} className="breadcrumb" aria-label="Breadcrumb" {...rest}>
      <Flex className={classNames} as="ol" wrap gap="sm">
        <BreadcrumbProvider {...breadcrumbContext}>{children}</BreadcrumbProvider>
      </Flex>
    </Tag>
  )
}) as ForwardRefComponent<'nav', BreadcrumbProps>

Breadcrumb.displayName = 'Breadcrumb'

export type { BreadcrumbItemProps, BreadcrumbProps, BreadcrumbContextProps } from './breadcrumb.type'
