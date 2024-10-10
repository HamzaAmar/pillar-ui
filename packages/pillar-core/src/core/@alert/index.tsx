import { useControllableState } from '@pillar-ui/hooks'
import { cx } from '../cx'
import { IconButton } from '../button'
import { forwardRef } from 'react'

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

    if (!isVisible) return

    const classNames = cx(`a-l f-l Sg-3 V-${variant} C-${color}`, {
      [`R-${corner}`]: !!corner,
      [`Fs-${size}`]: size,
      [className!]: className,
    })

    return (
      <div ref={forwardedRef} className={classNames} role="alert" {...rest}>
        {icon && <span className="Sw-fit">{icon}</span>}
        <div className={cx(`a-l_cnt f-l`, { al_in: inline })}>
          {title && <div className="Tt-capitalize Fw-5">{title}</div>}
          {message && <span>{message}</span>}
        </div>
        {closable && <IconButton size="2" onClick={handleToggle} icon={<Close />} title="close alert" color={color} />}
      </div>
    )
  }
) as ForwardRefComponent<'div', AlertProps>

Alert.displayName = 'Alert'

export type { AlertProps } from './alert.type'
