import { forwardRef } from 'react'
import { classnames } from '@pillar-ui/utils'
import { Close } from '@pillar-ui/icons'
import { useControllableState } from '@pillar-ui/hooks'
import { Flex } from '../flex'
import { IconButton } from '../button'

import type { AlertProps } from './alert.type'
import type { ForwardRefComponent } from '../../types/polymorphic.type'

export const Alert = forwardRef((props, forwardedRef) => {
  const {
    color = 'danger',
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
  } = props

  const [isVisible, setVisible] = useControllableState({
    controlledValue: visible,
    defaultValue: defaultVisible,
  })

  const handleToggle = () => {
    if (closable && onClose) {
      onClose()
    } else {
      setVisible(!isVisible)
    }
  }

  // Hide the component if isVisible is true
  if (!isVisible) {
    return null
  }

  // u_f is used to set the font size based on the size we size the component
  const classNames = classnames(`a-l u_${variant} u_${color}`, {
    [className!]: !!className,
    [`u_rad-${corner}`]: !!corner,
    [`u_f-${size}`]: !!size,
  })

  const _title = title && <div className="u_t__capitalize u_leading__md u_f-medium">{title}</div>
  const _message = message && <span>{message}</span>

  const closeIcon = closable && (
    <IconButton size="2xs" onClick={handleToggle} icon={<Close />} title="close title" color={color} />
  )

  return (
    <Flex ref={forwardedRef} gap="xs" className={classNames} role="alert" {...rest}>
      {icon && <span className="u_items-self u_leading__normal">{icon}</span>}
      <div data-inline={!!inline} className="a-l_cnt u_center">
        {_title}
        {_message}
      </div>
      <div className="a-l_itm">{closeIcon}</div>
    </Flex>
  )
}) as ForwardRefComponent<'div', AlertProps>

Alert.displayName = 'Pillar-Alert'

export type { AlertProps } from './alert.type'
