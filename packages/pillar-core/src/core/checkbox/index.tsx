'use client'
import { cx } from '../cx'
import { useComposedRefs } from '@pillar-ui/hooks'
import { forwardRef } from 'react'

import type { CheckboxContextProps, CheckboxProps, CheckGroupProps, CustomCheckboxProps } from './checkbox.type'
import { Check, Minus } from '../icons'
import { context } from '../provider'
import { Fieldset } from '../fieldset'

const ICON_PROPS = { strokeWidth: 2, 'aria-hidden': true, focusable: false, className: 'ch-I' }

const [CheckboxProvider, useCheckboxContext] = context<CheckboxContextProps>({ name: 'Checkbox' })

/*
===================================================================================================
  Checkbox Group Section
===================================================================================================
*/

export const CheckboxGroup = ({ direction = 'col', children, legend, hideLegend, id, ...rest }: CheckGroupProps) => {
  return (
    <Fieldset role="radiogroup" direction={direction} id={id} hideLegend={hideLegend} legend={legend}>
      <CheckboxProvider {...rest}>{children}</CheckboxProvider>
    </Fieldset>
  )
}

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>((props, forwardedRef) => {
  const ctx = useCheckboxContext()
  const {
    name,
    size = ctx?.size ?? '4',
    color = ctx?.color ?? 'p',
    variant = ctx?.variant ?? 'solid',
    isIndeterminate = false,
    icon = isIndeterminate ? <Minus {...ICON_PROPS} /> : <Check {...ICON_PROPS} />,
    children,
    className = ' ',
    ...rest
  } = props
  const ref = useComposedRefs(forwardedRef, (element: HTMLInputElement | null) => {
    if (element && isIndeterminate) {
      console.log(isIndeterminate, element)
      element.indeterminate = !!isIndeterminate
    }
  })

  const classNamesRoot = cx(`fl-inline Aai-start Sg-3 ch-C C-${color} ${className}`, { [`Fs-${size}`]: !!size })

  return (
    <label className={classNamesRoot}>
      <input
        type="checkbox"
        ref={ref}
        className="H-sr ch-E"
        name={name}
        aria-checked={isIndeterminate ? 'mixed' : rest.checked}
        {...rest}
      />
      <span className={`ch- S-e F-c ch-${variant}`}>{icon}</span>
      <div className="ch-L fl-1">{children}</div>
    </label>
  )
})

Checkbox.displayName = 'Checkbox'

/*
===================================================================================================
  Custom Checkbox Section
===================================================================================================
*/

export const CustomCheckbox = (props: CustomCheckboxProps) => {
  const ctx = useCheckboxContext()
  const {
    className = ' ',
    children,
    fluid = ctx?.fluid,
    indicator = ctx?.indicator ?? true,
    reversed = ctx?.reversed,
    ...rest
  } = props

  return (
    <Checkbox
      {...rest}
      data-indicator={indicator}
      className={cx(`ch-Cu ${className}`, { 'fl-row-reverse': !reversed, 'fl-1': fluid })}
    >
      {children}
    </Checkbox>
  )
}

export type { CheckboxProps } from './checkbox.type'
