import { forwardRef } from 'react'
import { cx } from '../cx'
import { context } from '../@provider'

import type { BreadcrumbProps, BreadcrumbItemProps, BreadcrumbContextProps } from './breadcrumb.type'
import type { ForwardRefComponent } from '../../types/polymorphic.type'
/* 
//////////////////////////////////////////////////////////////////////////////////////////////////
  Breadcrumb Item Section
//////////////////////////////////////////////////////////////////////////////////////////////////
*/

const [BreadcrumbProvider, useBreadcrumbContext] = context<BreadcrumbContextProps>({
  name: 'Breadcrumb',
  required: true,
})

export const BreadcrumbItem = forwardRef((props, forwardedRef) => {
  const ctx = useBreadcrumbContext() ?? {}
  const { as: Tag = 'a', children, current, separator = ctx.separator ?? '/', className, ...rest } = props
  const classNames = cx(`b-r_lnk u_gap-2xs u_center`, { [className!]: className })

  return (
    <li className={`f-l u_gap-sm b-r_itm`}>
      <Tag ref={forwardedRef} {...(current && { 'aria-current': 'page' })} className={classNames} {...rest}>
        {children}
      </Tag>
      {!current && (
        <span className="u_f-medium" role="presentation">
          {separator}
        </span>
      )}
    </li>
  )
}) as ForwardRefComponent<'a', BreadcrumbItemProps>

BreadcrumbItem.displayName = 'BreadcrumbItem'

/* 
//////////////////////////////////////////////////////////////////////////////////////////////////
  Breadcrumb Section
//////////////////////////////////////////////////////////////////////////////////////////////////
*/

export const Breadcrumb = forwardRef(
  ({ children, separator, size, color = 'bg', className, as: Tag = 'nav', ...rest }, ref) => {
    const breadcrumbContext = { separator }
    const classNames = cx(`f-l l_fl-wrap u_gap-sm u_${color}`, {
      [`u_f-${size}`]: size,
      [className!]: className,
    })

    return (
      <Tag ref={ref} className="breadcrumb" aria-label="Breadcrumb" {...rest}>
        <ol className={classNames}>
          <BreadcrumbProvider {...breadcrumbContext}>{children}</BreadcrumbProvider>
        </ol>
      </Tag>
    )
  }
) as ForwardRefComponent<'nav', BreadcrumbProps>

Breadcrumb.displayName = 'Breadcrumb'

export type { BreadcrumbItemProps, BreadcrumbProps, BreadcrumbContextProps } from './breadcrumb.type'
