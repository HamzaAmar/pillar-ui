// Disabled State Label And Box

import { Check, Minus } from '@pillar/icons'
import { classnames, composeRef } from '../../utils'
import { useEffect, useRef, forwardRef } from 'react'

import type { CheckboxProps } from './checkbox.type'
import { Flex } from '../layout'

const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>((props, forwardedRef) => {
  let {
    name,
    label,
    icon = <Check aria-hidden="true" focusable="false" className="checkbox--check" />,
    size = 'md',
    color = 'primary',
    showLabel,
    isIndeterminate = false,
    ...rest
  } = props

  const checkboxRef = useRef<HTMLInputElement>(null)

  icon =
    isIndeterminate && !rest.checked ? <Minus aria-hidden="true" focusable="false" className="checkbox--check" /> : icon

  useEffect(() => {
    if (checkboxRef.current) {
      if (isIndeterminate) {
        checkboxRef.current.indeterminate = Boolean(isIndeterminate)
      }
    }
  }, [isIndeterminate])

  const ref = composeRef(forwardedRef, checkboxRef)
  const _className = classnames('checkbox--label', { 'u_visually-hidden': showLabel })

  return (
    <Flex
      gap="2xs"
      items="center"
      justify="center"
      inline
      as="label"
      className={`checkbox l_size-${size} u_${color}`}
      data-disabled={props.disabled}
    >
      <input
        type="checkbox"
        ref={ref}
        className="u_visually-hidden checkbox--element"
        name={name}
        aria-checked={isIndeterminate && 'mixed'}
        {...rest}
      />
      <span className="checkbox--indicator">{icon}</span>
      <div className={_className}>{label}</div>
    </Flex>
  )
})

Checkbox.displayName = 'Pillar-Checkbox'

export default Checkbox
