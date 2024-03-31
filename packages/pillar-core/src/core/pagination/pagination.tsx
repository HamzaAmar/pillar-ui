import { forwardRef } from 'react'
import { Button, Flex } from '..'
import { ChevronDown, DotsHorizontal } from '@pillar-ui/icons'
import { usePagination } from '@pillar-ui/hooks'
import { ForwardRefComponent } from '../../types/polymorphic.type'

const [PaginationProvider, usePaginationContext] = createContext<PaginationContextProps>('Pagination')

import type { PaginationContextProps, PaginationItem, PaginationProps } from './pagination.type'
import { createContext } from '@pillar-ui/utils'

const Item = forwardRef((props, forwardedRef) => {
  const context = usePaginationContext()
  const {
    active = 1,
    children,
    variant = context?.variant ?? 'outline',
    color = context?.color ?? 'surface',
    size = context?.size ?? 'md',
    corner = context?.corner ?? 'sm',
    number,
    ...rest
  } = props
  return (
    <li>
      <Button
        variant={variant}
        className="pagination--button u_center"
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

Item.displayName = 'Pillar-PaginationItem'

export const Pagination = (props: PaginationProps) => {
  const { count = 10, ...rest } = props

  const { currentStep, range, goToNextStep, goToPreviousStep, jumpToStep, isFirst, isLast } = usePagination({
    totalPages: count,
  })

  return (
    <nav className={`pagination u_${rest.color}`} aria-label="Pagination">
      <PaginationProvider {...rest}>
        <Flex as="ul" gap="sm">
          <Item disabled={isFirst} onClick={goToPreviousStep} active={currentStep} number={currentStep - 1}>
            <ChevronDown width="20" direction="left" />
          </Item>
          {range.map((item, index) =>
            item === '.' ? (
              <Flex
                as="li"
                items="center"
                justify="center"
                key={index}
                className="pagination-item--link u_flex u_items-center u_justify-center"
              >
                <DotsHorizontal width={16} />
              </Flex>
            ) : (
              <Item key={index} active={currentStep} onClick={() => jumpToStep(item)} number={item}>
                {item}
              </Item>
            )
          )}
          <Item disabled={isLast} onClick={goToNextStep} active={currentStep} number={currentStep + 1}>
            <ChevronDown width="20" direction="right" />
          </Item>
        </Flex>
      </PaginationProvider>
    </nav>
  )
}

Pagination.Item = Item
