import { Children, cloneElement, forwardRef, isValidElement, useId } from 'react'
import { classnames, createContext } from '@pillar-ui/utils'
import { ChevronDown } from '@pillar-ui/icons'
// import { useControllableState } from '@pillar-ui/hooks'

import { ForwardRefComponent } from '../../types/polymorphic.type'
import { Flex } from '../flex'

import type {
  AccordionButtonProps,
  AccordionContextProps,
  AccordionItemContextProps,
  AccordionItemProps,
  AccordionPanelProps,
  AccordionProps,
} from './accordion.type'
import { useAccordion } from './useAccordion'
import { Text } from '../typography'

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
  const context = useAccordionContext()
  const classNames = classnames(`accordion--item u_${context?.variant} `, {
    [`accordion--item__${context?.variant}`]: !!context?.variant,
    [`u_corner-${context?.corner}`]: !!context?.corner,
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
  const itemContext = useAccordionItemContext()
  const accordionContext = useAccordionContext()
  const { children, id = itemContext?.id, icon = <ChevronDown />, title, className, ...rest } = props
  const classNames = classnames('accordion--button', { [className!]: !!className })
  return (
    <Flex
      justify="between"
      items="center"
      as="button"
      type="button"
      aria-expanded={accordionContext?.isItemOpen?.(itemContext?.value!)}
      aria-controls={id}
      className={classNames}
      onClick={() => accordionContext?.toggleAccordion?.(itemContext?.value!)}
      ref={ref}
      {...rest}
    >
      <Text weight="medium" as="span">
        {title}
      </Text>
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
  const { children, className, ...rest } = props
  const contextItem = useAccordionItemContext()
  const context = useAccordionContext()
  // const { isItemOpen } = useAccordionContext()
  const classNames = classnames('accordion--panel', {
    'accordion-hide': !context?.isItemOpen?.(contextItem?.value!),
    [className!]: !!className,
  })
  return (
    <div id={context?.id} className={classNames} ref={ref} {...rest}>
      <span className="accordion--panel-content"> {children}</span>
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
    corner,
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
