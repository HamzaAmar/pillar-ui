import { forwardRef } from 'react'
import { classnames } from '../../utils/classnames'
import { Close } from '@pillar/icons'
import { useBooleanState } from '@pillar/hooks'
import { Flex, Text, IconButton, FlexProps } from '..'

import type { AlertProps } from './alert.type'
import type { ForwardRefComponent } from '../../types/polymorphic.type'

const Alert = forwardRef((props, forwardedRef) => {
  const {
    color = 'danger',
    message,
    size = 'sm',
    title,
    inline,
    variant = 'solid',
    closable = false,
    corner = 'md',
    className,
    icon,
    ...rest
  } = props
  const { booleanValue, setTrue } = useBooleanState(false)

  // Hide the component if booleanValue is true
  if (booleanValue) {
    return null
  }
  const _className = classnames(`alert alert__${variant} u_${color} l_corner-${corner} l_size-${size}`, {
    [className!]: !!className,
  })

  const inlineText: Partial<FlexProps> = !inline ? { direction: 'column' } : { items: 'center', gap: 'xs' }

  const _title = title && (
    <Text transform="capitalize" leading="md" weight="medium">
      {title}
    </Text>
  )
  const _message = message && <Text as="span">{message}</Text>

  const closeIcon = closable && (
    <IconButton size="2xs" onClick={setTrue} icon={<Close />} title="close title" color={color} />
  )

  return (
    <Flex ref={forwardedRef} gap="2xs" justify="between" items="start" className={_className} role="alert" {...rest}>
      <Flex items="start" gap="sm">
        {icon && <span className="u_items-self u_leading__normal">{icon}</span>}
        <Flex {...inlineText} justify="center">
          {_title}
          {_message}
        </Flex>
      </Flex>
      {closeIcon}
    </Flex>
  )
}) as ForwardRefComponent<'div', AlertProps>

Alert.displayName = 'Pillar-Alert'

export default Alert
