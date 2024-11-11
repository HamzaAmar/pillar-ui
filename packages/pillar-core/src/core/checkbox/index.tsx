'use client'
import { cx } from '../cx'
import { useComposedRefs } from '@pillar-ui/hooks'
import { forwardRef } from 'react'

import type { CheckboxProps } from './checkbox.type'
import { Check, Minus } from '../icons'

const ICON_PROPS = { strokeWidth: 2, 'aria-hidden': true, focusable: false, className: 'ch-I' }

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  (
    {
      name,
      size,
      color = 'p',
      isIndeterminate = false,
      icon = isIndeterminate ? <Minus {...ICON_PROPS} /> : <Check {...ICON_PROPS} />,
      variant = 'solid',
      children,
      ...rest
    },
    forwardedRef
  ) => {
    const ref = useComposedRefs(forwardedRef, (element: HTMLInputElement | null) => {
      if (element && isIndeterminate) {
        element.indeterminate = !!isIndeterminate
      }
    })

    const classNamesRoot = cx(`ch-C C-${color}`, { [`Fs-${size}`]: !!size })

    return (
      <label className={classNamesRoot}>
        <input
          type="checkbox"
          ref={ref}
          className="H-sr ch-E "
          name={name}
          aria-checked={isIndeterminate ? 'mixed' : rest.checked}
          {...rest}
        />
        <span className={`ch- S-e F-c ch-${variant}`}>{icon}</span>
        <div className={cx('ch-L')}>{children}</div>
      </label>
    )
  }
)

Checkbox.displayName = 'Checkbox'

export type { CheckboxProps } from './checkbox.type'
