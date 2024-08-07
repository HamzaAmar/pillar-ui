import { forwardRef } from 'react'
import { Button } from '../button'
import { ChevronDown, DotsHorizontal } from '@pillar-ui/icons'
import { usePagination } from '@pillar-ui/hooks'
import { ForwardRefComponent } from '../../types/polymorphic.type'

const [PaginationProvider, usePaginationContext] = createContext<PaginationContextProps>({
  name: 'Pagination',
  isContextRequired: true,
})

import type { PaginationContextProps, PaginationItem, PaginationProps } from './pagination.type'
import { classnames, createContext } from '@pillar-ui/utils'

const Item = forwardRef((props, forwardedRef) => {
  const context = usePaginationContext()
  const {
    active = 1,
    children,
    variant = context?.variant ?? 'outline',
    color = context?.color ?? 'bg',
    size = context?.size ?? 'sm',
    corner = context?.corner ?? 'sm',
    number,
    className,
    ...rest
  } = props

  const _classNames = classnames('p-a_btn u_center', { className: !!className })

  return (
    <li>
      <Button
        variant={variant}
        className={_classNames}
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

export const Pagination = (props: PaginationProps) => {
  const { count = 10, ...rest } = props

  const { currentStep, range, goToNextStep, goToPreviousStep, jumpToStep, isFirst, isLast } = usePagination({
    totalPages: count,
  })

  return (
    <nav className={`p-a u_${rest.color}`} aria-label="Pagination">
      <PaginationProvider {...rest}>
        <ul className="p-a_lst">
          <Item disabled={isFirst} onClick={goToPreviousStep} active={currentStep} number={currentStep - 1}>
            <ChevronDown width="20" direction="left" />
          </Item>
          {range.map((item, index) =>
            item === '.' ? (
              <li key={index} className="p-a_itm u_center">
                <DotsHorizontal width={16} />
              </li>
            ) : (
              <Item key={index} active={currentStep} onClick={() => jumpToStep(item)} number={item}>
                {item}
              </Item>
            )
          )}
          <Item disabled={isLast} onClick={goToNextStep} active={currentStep} number={currentStep + 1}>
            <ChevronDown width="20" direction="right" />
          </Item>
        </ul>
      </PaginationProvider>
    </nav>
  )
}

export type { PaginationProps, PaginationItem } from './pagination.type'
