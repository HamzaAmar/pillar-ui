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

const AccordionItem = forwardRef(({ children, value, className, ...rest }, ref) => {
  const id = useId()
  const itemContextValue = { id, value }
  const { corner, variant } = useAccordionContext() ?? {}
  const classNames = classnames(`accordion--item u_${variant} `, {
    [`u_corner-${corner}`]: !!corner,
    [className!]: !!className,
  })

  return (
    <div ref={ref} className={classNames} {...rest}>
      <AccordionItemProvider {...itemContextValue}>{children}</AccordionItemProvider>
    </div>
  )
}) as ForwardRefComponent<'div', AccordionItemProps>

AccordionItem.displayName = 'Pillar-AccordionItem'

/*
///////////////////////////////////////////////////////////////////////////////////////////////////
  Accordion Button  Section
///////////////////////////////////////////////////////////////////////////////////////////////////
*/

const AccordionButton = forwardRef((props, ref) => {
  const { value, id: idContext } = useAccordionItemContext() ?? {}
  const { toggleAccordion, isItemOpen } = useAccordionContext() ?? {}
  const { children, id = idContext, icon = <ChevronDown width="1em" />, className, ...rest } = props
  const classNames = classnames('accordion--button u_between', { [className!]: !!className })
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

AccordionButton.displayName = 'Pillar-AccordionButton'

/*
///////////////////////////////////////////////////////////////////////////////////////////////////
  Accordion Button  Section
///////////////////////////////////////////////////////////////////////////////////////////////////
*/

const AccordionPanel = forwardRef((props, ref) => {
  const { children, className, ...rest } = props
  const { value } = useAccordionItemContext() ?? {}
  const { isItemOpen, id } = useAccordionContext() ?? {}

  const _className = classnames('accordion--panel', { [className!]: !!className })

  return (
    <div id={id} data-open={isItemOpen?.(value!)} className={_className} ref={ref} {...rest}>
      {children}
    </div>
  )
}) as ForwardRefComponent<'div', AccordionPanelProps>

AccordionPanel.displayName = 'Pillar-AccordionPanel'

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
    color,
    variant,
    size = 'md',
    corner = 'sharp',
    separate,
    className,
    ...rest
  } = props
  const context = useAccordion(props)

  const classNames = classnames(`accordion l_flow__3xs`, {
    [`u_${color}`]: !!color,
    [`u_size-${size}`]: !!size,
    l_flow: !!separate,
    [className!]: !!className,
  })
  const accordionContext = { ...context, variant, corner }

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
}) as ForwardRefComponent<'div', AccordionProps> & {
  Item: typeof AccordionItem
  Button: typeof AccordionButton
  Panel: typeof AccordionPanel
}

Accordion.displayName = 'PillarAccordion'

Accordion.Item = AccordionItem
Accordion.Button = AccordionButton
Accordion.Panel = AccordionPanel
