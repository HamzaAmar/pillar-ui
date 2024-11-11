'use client'

import { useControllableState } from '@pillar-ui/hooks'
import { cx } from '../cx'
import { IconButton } from '../button'
import { cloneElement, forwardRef } from 'react'

import type { ForwardRefComponent } from '../../types/polymorphic.type'
import type { AlertProps } from './alert.type'
import { Close } from '../icons'

export const Alert = forwardRef(
  (
    {
      color = 'd',
      message,
      size,
      title,
      inline,
      variant = 'soft',
      closable = false,
      corner,
      className,
      visible,
      defaultVisible = true,
      onClose,
      icon,
      action = <IconButton size="2" icon={<Close />} title="close alert" color={color} />,
      ...rest
    },
    forwardedRef
  ) => {
    const [isVisible, setVisible] = useControllableState({
      controlledValue: visible,
      defaultValue: defaultVisible,
    })

    const handleToggle = () => {
      closable && onClose ? onClose() : setVisible(!isVisible)
    }

    const actionWithToggle = action
      ? cloneElement(action, {
          onClick: (e: any) => {
            action.props?.onClick?.(e)
            handleToggle()
          },
        })
      : null

    if (!isVisible) return

    const classNames = cx(`al- fl- Aai-start Sg-3 V-${variant} C-${color}`, {
      [`R-${corner}`]: !!corner,
      [`Fs-${size}`]: size,
      [className!]: className,
    })

    return (
      <div ref={forwardedRef} className={classNames} role="alert" {...rest}>
        {icon && <span className="Sw-fit">{icon}</span>}
        <div className={cx(`al-C fl-`, { 'al-I': inline })}>
          {title && <div className="Tt-capitalize Fw-5">{title}</div>}
          {message && <span>{message}</span>}
        </div>
        {closable && actionWithToggle}
      </div>
    )
  }
) as ForwardRefComponent<'div', AlertProps>

Alert.displayName = 'Alert'

export type { AlertProps } from './alert.type'
