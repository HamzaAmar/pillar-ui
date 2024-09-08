import { cx } from '../utils'
import { useComposedRefs } from '@pillar-ui/hooks'
import { useEffect, useRef, forwardRef } from 'react'

import type { CheckboxProps } from './checkbox.type'
import { Check, Minus } from '../icons'

const ICON_PROPS = { strokeWidth: 2, 'aria-hidden': true, focusable: false, className: 'c-h_icn' }

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>((props, forwardedRef) => {
  let {
    name,
    label,
    icon = <Check {...ICON_PROPS} />,
    size,
    color,
    showLabel,
    isIndeterminate = false,
    ...rest
  } = props

  const checkboxRef = useRef<HTMLInputElement>(null)
  icon = isIndeterminate ? <Minus {...ICON_PROPS} /> : icon

  useEffect(() => {
    if (checkboxRef.current) {
      if (isIndeterminate) {
        checkboxRef.current.indeterminate = Boolean(isIndeterminate)
      }
    }
  }, [isIndeterminate])

  const ref = useComposedRefs(forwardedRef, checkboxRef)
  const classNamesRoot = cx('c-h_cnt', { [`u_f-${size}`]: !!size, [`u_${color}`]: !!color })
  const classNames = cx('c-h_lbl', { u_sr: !!showLabel })

  return (
    <label className={classNamesRoot}>
      <input
        type="checkbox"
        ref={ref}
        className="u_sr c-h_el"
        name={name}
        aria-checked={isIndeterminate ? 'mixed' : rest.checked}
        {...rest}
      />
      <span className="c-h u_s-equal u_center">{icon}</span>
      <div className={classNames}>{label}</div>
    </label>
  )
})

Checkbox.displayName = 'Checkbox'

export type { CheckboxProps } from './checkbox.type'
