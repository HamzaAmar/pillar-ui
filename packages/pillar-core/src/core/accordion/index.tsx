import { Children, cloneElement, forwardRef, isValidElement, useId } from 'react'
import { classnames, createContext } from '@pillar-ui/utils'
import { ChevronDown } from '@pillar-ui/icons'
import { useAccordion } from './useAccordion'

import type { ForwardRefComponent } from '../../types/polymorphic.type'
import type {
  AccordionButtonProps,
  AccordionContextProps,
  AccordionItemContextProps,
  AccordionItemProps,
  AccordionPanelProps,
  AccordionProps,
} from './accordion.type'

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

  const classNames = classnames(`a-c`, {
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

const [AccordionItemProvider, useAccordionItemContext] = createContext<AccordionItemContextProps>({
  name: 'AccordionItem',
  isContextRequired: true,
})
const [AccordionProvider, useAccordionContext] = createContext<AccordionContextProps>({
  name: 'Accordion',
  isContextRequired: true,
})

export const AccordionItem = forwardRef(({ children, value, className, ...rest }, ref) => {
  const id = useId()
  const itemContextValue = { id, value }
  const { corner, variant } = useAccordionContext() ?? {}
  const classNames = classnames(`a-c_itm u_${variant} `, {
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
  const classNames = classnames('a-c_btn u_between', { [className!]: !!className })
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
      {icon}
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

  const _className = classnames('a-c_pnl', { [className!]: !!className })

  return (
    <div id={id} data-open={isItemOpen?.(value!)} className={_className} ref={ref} {...rest}>
      {children}
    </div>
  )
}) as ForwardRefComponent<'div', AccordionPanelProps>

AccordionPanel.displayName = 'Pillar-AccordionPanel'

Accordion.displayName = 'Accordion'

export type { AccordionButtonProps } from './accordion.type'
