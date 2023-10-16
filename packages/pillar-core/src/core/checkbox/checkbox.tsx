// Disabled State Label And Box

import { Check, Minus } from '@pillar-ui/icons'
import { classnames } from '@pillar-ui/utils'
import { useComposedRefs } from '@pillar-ui/hooks'
import { useEffect, useRef, forwardRef } from 'react'

import type { CheckboxProps } from './checkbox.type'
import { Flex } from '../flex'

const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>((props, forwardedRef) => {
  let {
    name,
    label,
    icon = <Check strokeWidth={2} aria-hidden="true" focusable="false" className="checkbox--check" />,
    size,
    color,
    showLabel,
    isIndeterminate = false,
    ...rest
  } = props

  const checkboxRef = useRef<HTMLInputElement>(null)
  icon = isIndeterminate ? <Minus aria-hidden="true" focusable="false" className="checkbox--check" /> : icon

  useEffect(() => {
    if (checkboxRef.current) {
      if (isIndeterminate) {
        checkboxRef.current.indeterminate = Boolean(isIndeterminate)
      }
    }
  }, [isIndeterminate])

  const ref = useComposedRefs(forwardedRef, checkboxRef)
  const classNamesRoot = classnames(`checkbox`, { [`u_size-${size}`]: !!size, [`u_${color}`]: !!color })
  const classNames = classnames('checkbox--label', { 'u_visually-hidden': !!showLabel })

  return (
    <Flex
      gap="2xs"
      items="center"
      justify="center"
      inline
      as="label"
      className={classNamesRoot}
      data-disabled={props.disabled}
    >
      <input
        type="checkbox"
        ref={ref}
        className="u_visually-hidden checkbox--element"
        name={name}
        aria-checked={isIndeterminate ? 'mixed' : rest.checked}
        {...rest}
      />
      <span className="checkbox--indicator">{icon}</span>
      <div className={classNames}>{label}</div>
    </Flex>
  )
})

Checkbox.displayName = 'Pillar-Checkbox'

export default Checkbox
