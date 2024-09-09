import { Children, cloneElement, forwardRef, isValidElement, useId, useState } from 'react'
import { cx, context } from '../utils'

import type { ForwardRefComponent } from '../../types/polymorphic.type'
import type {
  AccordionButtonProps,
  AccordionContextProps,
  AccordionItemContextProps,
  AccordionItemProps,
  AccordionPanelProps,
  AccordionProps,
  Value,
} from './accordion.type'
import { ChevronDown } from '../icons'

/*
///////////////////////////////////////////////////////////////////////////////////////////////////
  Accordion  Custom Hook
///////////////////////////////////////////////////////////////////////////////////////////////////
*/

function useAccordion({ type, collapsible }: AccordionProps) {
  const [activeItems, setActiveItems] = useState<Value | Value[]>(type === 'multiple' ? [] : -1)
  const isItemOpen = (value: Value) =>
    Array.isArray(activeItems) ? activeItems.includes(value) : activeItems === value

  function toggleAccordion(currentIndex: Value) {
    const isOpen = isItemOpen(currentIndex)

    if (isOpen && !collapsible) {
      if (Array.isArray(activeItems) && activeItems.length === 1) return
      if (activeItems === currentIndex) return
    }
    Array.isArray(activeItems)
      ? setActiveItems(isOpen ? activeItems.filter((v) => v !== currentIndex) : [...activeItems, currentIndex])
      : setActiveItems((val) => (currentIndex === val ? -1 : currentIndex))
  }
  return { activeItems, setActiveItems, toggleAccordion, isItemOpen }
}

/*
///////////////////////////////////////////////////////////////////////////////////////////////////
  Accordion  Section
///////////////////////////////////////////////////////////////////////////////////////////////////
*/

export const Accordion = forwardRef((props, forwardedRef) => {
  const {
    children,
    type = 'single',
    collapsible,
    color = 'bg',
    variant,
    size = 'md',
    corner = 'sharp',
    separate,
    className,
    ...rest
  } = props
  const state = useAccordion(props)

  const classNames = cx(`a-c`, {
    [`u_${color}`]: !!color,
    [`u_f-${size}`]: !!size,
    'l_f-sm': !!separate,
    [className!]: !!className,
  })
  const accordionContext = { ...state, variant, corner }

  return (
    <div ref={forwardedRef} className={classNames} {...rest}>
      <AccordionProvider {...accordionContext}>
        {Children.map(children, (child, index) => {
          if (!isValidElement(child)) {
            return
          }
          return cloneElement(child, { value: index } as any)
        })}
      </AccordionProvider>
    </div>
  )
}) as ForwardRefComponent<'div', AccordionProps>

/*
///////////////////////////////////////////////////////////////////////////////////////////////////
  Accordion Item Section
///////////////////////////////////////////////////////////////////////////////////////////////////
*/

const [AccordionItemProvider, useAccordionItemContext] = context<AccordionItemContextProps>({
  name: 'AccordionItem',
  required: true,
})
const [AccordionProvider, useAccordionContext] = context<AccordionContextProps>({
  name: 'Accordion',
  required: true,
})

export const AccordionItem = forwardRef(({ children, value, className, ...rest }, ref) => {
  const id = useId()
  const itemContextValue = { id, value }
  const { corner, variant } = useAccordionContext() ?? {}
  const classNames = cx(`a-c_itm u_${variant} `, {
    [`u_rad-${corner}`]: !!corner,
    [className!]: !!className,
  })

  return (
    <div ref={ref} className={classNames} {...rest}>
      <AccordionItemProvider {...itemContextValue}>{children}</AccordionItemProvider>
    </div>
  )
}) as ForwardRefComponent<'div', AccordionItemProps>

AccordionItem.displayName = 'AccordionItem'

/*
///////////////////////////////////////////////////////////////////////////////////////////////////
  Accordion Button  Section
///////////////////////////////////////////////////////////////////////////////////////////////////
*/

export const AccordionButton = forwardRef((props, ref) => {
  const { value, id: idContext } = useAccordionItemContext() ?? {}
  const { toggleAccordion, isItemOpen } = useAccordionContext() ?? {}
  const { children, id = idContext, icon = <ChevronDown width="1em" />, className, ...rest } = props
  const classNames = cx('a-c_btn u_between', { [className!]: !!className })
  return (
    <button
      type="button"
      aria-expanded={isItemOpen?.(value!)}
      aria-controls={id}
      className={classNames}
      onClick={() => toggleAccordion?.(value!)}
      ref={ref}
      {...rest}
    >
      {children}
      {<span className="u_w-fit">{icon}</span>}
    </button>
  )
}) as ForwardRefComponent<'button', AccordionButtonProps>

AccordionButton.displayName = 'AccordionButton'

/*
///////////////////////////////////////////////////////////////////////////////////////////////////
  Accordion Button  Section
///////////////////////////////////////////////////////////////////////////////////////////////////
*/

export const AccordionPanel = forwardRef((props, ref) => {
  const { children, className, ...rest } = props
  const { value } = useAccordionItemContext() ?? {}
  const { isItemOpen, id } = useAccordionContext() ?? {}

  const _className = cx('a-c_pnl', { [className!]: !!className })

  return (
    <div id={id} data-open={isItemOpen?.(value!)} className={_className} ref={ref} {...rest}>
      {children}
    </div>
  )
}) as ForwardRefComponent<'div', AccordionPanelProps>

AccordionPanel.displayName = 'AccordionPanel'

Accordion.displayName = 'Accordion'

export type { AccordionButtonProps } from './accordion.type'
