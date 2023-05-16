import { Children, cloneElement, forwardRef, isValidElement, useId } from 'react'
import { ForwardRefComponent } from '../../types/polymorphic.type'
import type {
  AccordionButtonProps,
  AccordionContextProps,
  AccordionItemContextProps,
  AccordionItemProps,
  AccordionPanelProps,
  AccordionProps,
} from './accordion.type'
// import { useControllableState } from '@pillar/hooks'
import { classnames } from '../../utils'
import { Flex } from '../layout'
import { ChevronDown } from '@pillar/icons'
import { useAccordion } from './useAccordion'
import { createContext } from '../../utils/context'

/*
///////////////////////////////////////////////////////////////////////////////////////////////////
  Accordion Item Section
///////////////////////////////////////////////////////////////////////////////////////////////////
*/

const [AccordionItemProvider, useAccordionItemContext] = createContext<AccordionItemContextProps>('AccordionItem')
const [AccordionProvider, useAccordionContext] = createContext<AccordionContextProps>('Accordion')

const AccordionItem = forwardRef(({ children, value, ...rest }, ref) => {
  const id = useId()
  const obj = { id, value }
  const context = useAccordionContext()
  const classNames = classnames(`accordion--item accordion--item__${context?.variant} l_corner-${context?.corner}`, {
    [`accordion--item__${context?.variant}`]: !!context?.variant,
  })

  return (
    <div ref={ref} className={classNames} {...rest}>
      <AccordionItemProvider {...obj}>{children}</AccordionItemProvider>
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
  const itemContext = useAccordionItemContext()
  const accordionContext = useAccordionContext()
  const { children, id = itemContext?.id, icon = <ChevronDown />, title, ...rest } = props

  return (
    <Flex
      justify="between"
      items="center"
      as="button"
      aria-expanded={accordionContext?.checkIfOpen?.(itemContext?.value!)}
      aria-controls={id}
      className="accordion--button"
      onClick={() => accordionContext?.ToggleAccordion?.(itemContext?.value!)}
      ref={ref}
      {...rest}
    >
      <span> {title}</span>
      {icon}
    </Flex>
  )
}) as ForwardRefComponent<'button', AccordionButtonProps>

AccordionButton.displayName = 'Pillar-AccordionButton'

/*
///////////////////////////////////////////////////////////////////////////////////////////////////
  Accordion Button  Section
///////////////////////////////////////////////////////////////////////////////////////////////////
*/

const AccordionPanel = forwardRef((props, ref) => {
  const { children, ...rest } = props
  const contextItem = useAccordionItemContext()
  const context = useAccordionContext()
  // const { checkIfOpen } = useAccordionContext()
  const classNames = classnames('accordion--panel', {
    'accordion-hide': !context?.checkIfOpen?.(contextItem?.value!),
  })
  return (
    <div id={context?.id} className={classNames} ref={ref} {...rest}>
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

export const Accordion = forwardRef((props, ref) => {
  const {
    children,
    type = 'single',
    collapsible,
    color,
    variant,
    size = 'md',
    corner = 'sharp',
    separate,
    ...rest
  } = props
  const context = useAccordion(props)
  const classNames = classnames(`accordion l_size-${size}`, { [`u_${color}`]: !!color, l_flow: !!separate })
  const accordionContext = { ...context, variant, corner }

  return (
    <div ref={ref} className={classNames} {...rest}>
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
