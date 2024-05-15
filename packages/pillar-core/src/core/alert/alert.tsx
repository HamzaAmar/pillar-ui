import { forwardRef } from 'react'
import { classnames } from '@pillar-ui/utils'
import { Close } from '@pillar-ui/icons'
import { useControllableState } from '@pillar-ui/hooks'
import { Flex, Text, IconButton, FlexProps } from '..'

import type { AlertProps } from './alert.type'
import type { ForwardRefComponent } from '../../types/polymorphic.type'

const Alert = forwardRef((props, forwardedRef) => {
  const {
    color = 'danger',
    message,
    size,
    title,
    inline,
    variant = 'solid',
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

  const classNames = classnames(`alert u_${variant} u_${color}`, {
    [className!]: !!className,
    [`u_corner-${corner}`]: !!corner,
    [`u_size-${size}`]: !!size,
  })

  const inlineText: Partial<FlexProps> = !inline ? { direction: 'column' } : { items: 'center' }

  const _title = title && (
    <Text transform="capitalize" leading="md" weight="medium">
      {title}
    </Text>
  )
  const _message = message && <Text as="span">{message}</Text>

  const closeIcon = closable && (
    <IconButton size="2xs" onClick={handleToggle} icon={<Close />} title="close title" color={color} />
  )

  return (
    <Flex ref={forwardedRef} gap="xs" items="start" className={classNames} role="alert" {...rest}>
      {icon && <span className="u_items-self u_leading__normal">{icon}</span>}
      <Flex {...inlineText} gap="xs" justify="center">
        {_title}
        {_message}
      </Flex>
      <div className="alert-close">{closeIcon}</div>
    </Flex>
  )
}) as ForwardRefComponent<'div', AlertProps>

Alert.displayName = 'Pillar-Alert'

export default Alert
