import { Children, cloneElement, forwardRef, isValidElement, useId, useState } from 'react'

// TODO: Docs BUild Failed when importing from index and get error of not a function
// import { cx, context } from '../..'
import { context } from '../@provider'
import { cx } from '../cx'

import { ChevronDown } from '../icons'

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

/*
///////////////////////////////////////////////////////////////////////////////////////////////////
  Accordion  Custom Hook
///////////////////////////////////////////////////////////////////////////////////////////////////
*/

function useAccordion({ type, collapsible }: AccordionProps) {
  const [active, setActive] = useState<Value | Value[]>(type === 'multiple' ? [] : -1)
  const isOpen = (value: Value) => (Array.isArray(active) ? active.includes(value) : active === value)

  function toggleAccordion(currentIndex: Value) {
    const open = isOpen(currentIndex)

    if (open && !collapsible) {
      if (Array.isArray(active) && active.length === 1) return
      if (active === currentIndex) return
    }
    Array.isArray(active)
      ? setActive(open ? active.filter((v) => v !== currentIndex) : [...active, currentIndex])
      : setActive((val) => (currentIndex === val ? -1 : currentIndex))
  }
  return { active, setActive, toggleAccordion, isOpen }
}

const [AccordionItemProvider, useAccordionItemContext] = context<AccordionItemContextProps>({
  name: 'AccordionItem',
  required: true,
})
const [AccordionProvider, useAccordionContext] = context<AccordionContextProps>({
  name: 'Accordion',
  required: true,
})

/*
///////////////////////////////////////////////////////////////////////////////////////////////////
  Accordion  Section
///////////////////////////////////////////////////////////////////////////////////////////////////
*/

export const Accordion = forwardRef(
  (
    {
      children,
      type = 'single',
      collapsible,
      color = 'B',
      variant,
      size = '5',
      corner = '0',
      separate,
      className,
      ...rest
    },
    forwardedRef
  ) => {
    const state = useAccordion({ type, collapsible })

    const classNames = cx(`ac-`, {
      [`C-${color}`]: color,
      [`Fs-${size}`]: size,
      'Sf-4': separate,
      [`u_variant`]: variant,
      [className!]: className,
    })
    const accordionContext = { ...state, variant, corner }

    return (
      <div ref={forwardedRef} className={classNames} {...rest}>
        <AccordionProvider {...accordionContext}>
          {/* I use the value instead of the index to make this smaller */}
          {Children.map(children, (child, value) => {
            return isValidElement(child) ? cloneElement(child, { value } as any) : null
          })}
        </AccordionProvider>
      </div>
    )
  }
) as ForwardRefComponent<'div', AccordionProps>

/*
///////////////////////////////////////////////////////////////////////////////////////////////////
  Accordion Item Section
///////////////////////////////////////////////////////////////////////////////////////////////////
*/

export const AccordionItem = forwardRef(({ children, value, className, ...rest }, ref) => {
  const id = useId()
  const ctx = { id, value }
  const { corner, variant } = useAccordionContext() ?? {}
  const classNames = cx(`ac-I`, {
    [`R-${corner}`]: corner,
    [`V-${variant}`]: variant,
    [className!]: className,
  })

  return (
    <div ref={ref} className={classNames} {...rest}>
      <AccordionItemProvider {...ctx}>{children}</AccordionItemProvider>
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
  const { toggleAccordion, isOpen } = useAccordionContext() ?? {}
  const { children, id = idContext, icon = <ChevronDown width="1em" />, className, ...rest } = props
  const classNames = cx('ac-B F-b', { [className!]: !!className })
  return (
    <button
      type="button"
      aria-expanded={isOpen?.(value!)}
      aria-controls={id}
      className={classNames}
      onClick={() => toggleAccordion?.(value!)}
      ref={ref}
      {...rest}
    >
      {children}
      {<span className="Sw-fit">{icon}</span>}
    </button>
  )
}) as ForwardRefComponent<'button', AccordionButtonProps>

AccordionButton.displayName = 'AccordionButton'

/*
///////////////////////////////////////////////////////////////////////////////////////////////////
  Accordion Button  Section
///////////////////////////////////////////////////////////////////////////////////////////////////
*/

export const AccordionPanel = forwardRef(({ children, className, ...rest }, ref) => {
  const { value } = useAccordionItemContext() ?? {}
  const { isOpen, id } = useAccordionContext() ?? {}

  return (
    <div id={id} data-open={isOpen?.(value!)} className={cx('ac-P', { [className!]: className })} ref={ref} {...rest}>
      {children}
    </div>
  )
}) as ForwardRefComponent<'div', AccordionPanelProps>

AccordionPanel.displayName = 'AccordionPanel'

Accordion.displayName = 'Accordion'

export type { AccordionButtonProps } from './accordion.type'
