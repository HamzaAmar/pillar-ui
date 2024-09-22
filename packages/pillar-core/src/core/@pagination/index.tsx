import { forwardRef } from 'react'
import { Button } from '../button'
import { usePagination } from '@pillar-ui/hooks'
import { ForwardRefComponent } from '../../types/polymorphic.type'
import type { PaginationContextProps, PaginationItem, PaginationProps } from './pagination.type'
import { cx } from '../cx'
import { context } from '../@provider'
import { ChevronDown, DotsHorizontal } from '../icons'

const [PaginationProvider, usePaginationContext] = context<PaginationContextProps>({
  name: 'Pagination',
  required: true,
})

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

  const _classNames = cx('p-a_btn u_center', { className: !!className })

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

  const { step, range, goToNext, goToPrevious, jumpTo, isFirst, isLast } = usePagination({
    max: count,
  })

  return (
    <nav className={`p-a u_${rest.color}`} aria-label="Pagination">
      <PaginationProvider {...rest}>
        <ul className="p-a_lst">
          <Item disabled={isFirst} onClick={goToPrevious} active={step} number={step - 1}>
            <ChevronDown width="20" direction="left" />
          </Item>
          {range.map((item, index) =>
            item === '.' ? (
              <li key={index} className="p-a_itm u_center">
                <DotsHorizontal width={16} />
              </li>
            ) : (
              <Item key={index} active={step} onClick={() => jumpTo(item)} number={item}>
                {item}
              </Item>
            )
          )}

          <Item disabled={isLast} onClick={goToNext} active={step} number={step + 1}>
            <ChevronDown width="20" direction="right" />
          </Item>
        </ul>
      </PaginationProvider>
    </nav>
  )
}

export type { PaginationProps, PaginationItem } from './pagination.type'
