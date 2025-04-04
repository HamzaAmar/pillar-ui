'use client'
import { forwardRef } from 'react'
import { context } from '../provider'
import { Button } from '../button'
import { usePagination } from '@pillar-ui/hooks'
import { ChevronDown, DotsHorizontal } from '../icons'

import type { ForwardRefComponent } from '../../types/polymorphic.type'
import type { PaginationContextProps, PaginationItem, PaginationProps } from './pagination.type'

const [PaginationProvider, usePaginationContext] = context<PaginationContextProps>({
  name: 'Pagination',
  required: true,
})

const Item = forwardRef((props, forwardedRef) => {
  const context = usePaginationContext()
  const {
    active = 1,
    children,
    variant = context?.variant ?? 'soft',
    color = context?.color ?? 'b',
    size = context?.size ?? '4',
    corner = context?.corner ?? '2',
    number,
    className = '',
    ...rest
  } = props

  return (
    <li>
      <Button
        variant={variant}
        className={`pa-B F-c ${className}`}
        size={size}
        color={color}
        corner={corner}
        aria-current={active === number ? 'page' : undefined}
        {...rest}
        aria-label={`${active ? '' : 'Go to '}Page ${number}`}
        ref={forwardedRef}
      >
        {children}
      </Button>
    </li>
  )
}) as ForwardRefComponent<'button', PaginationItem>

Item.displayName = 'PaginationItem'

export const Pagination = ({ count = 10, onPageChange, ...rest }: PaginationProps) => {
  const { step, range, goToNext, goToPrevious, jumpTo, isFirst, isLast } = usePagination({
    max: count,
  })

  const goToNextPage = () => {
    onPageChange?.(step + 1)
    goToNext()
  }

  const goToPreviousPage = () => {
    onPageChange?.(step - 1)
    goToPrevious()
  }

  const goToPage = (page: number) => {
    onPageChange?.(page)
    jumpTo(page)
  }

  return (
    <nav className={`p-a C-${rest.color}`} aria-label="Pagination">
      <PaginationProvider {...rest}>
        <ul className="pa-L Sg-3">
          <Item disabled={isFirst} onClick={goToPreviousPage} active={step} number={step - 1}>
            <ChevronDown width="20" direction="left" />
          </Item>
          {range.map((item, index) =>
            item === '.' ? (
              <li key={index} className="pa-I F-c">
                <DotsHorizontal width={16} />
              </li>
            ) : (
              <Item key={index} active={step} onClick={() => goToPage(item)} number={item}>
                {item}
              </Item>
            )
          )}

          <Item disabled={isLast} onClick={goToNextPage} active={step} number={step + 1}>
            <ChevronDown width="20" direction="right" />
          </Item>
        </ul>
      </PaginationProvider>
    </nav>
  )
}

export type { PaginationProps, PaginationItem } from './pagination.type'
