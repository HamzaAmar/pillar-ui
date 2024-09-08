import { useControllableState } from '@pillar-ui/hooks'
import { cx } from '../utils'
import { forwardRef } from 'react'
import { IconButton } from '../button'
import { Flex } from '../flex'

import type { ForwardRefComponent } from '../../types/polymorphic.type'
import type { AlertProps } from './alert.type'
import { Close } from '../icons'

export const Alert = forwardRef((props, forwardedRef) => {
  const {
    color = 'dan',
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
  const classNames = cx(`a-l u_${variant} u_${color}`, {
    [`u_rad-${corner}`]: !!corner,
    [`u_f-${size}`]: !!size,
    [className!]: !!className,
  })

  return (
    <Flex ref={forwardedRef} gap="xs" className={classNames} role="alert" {...rest}>
      {icon && <span className="u_it-self u_t-normal">{icon}</span>}
      <div data-inline={!!inline} className="a-l_cnt u_center">
        {title && <div className="u_t-capitalize u_t-md u_f-medium">{title}</div>}
        {message && <span>{message}</span>}
      </div>
      {closable && (
        <IconButton
          className="a-l_itm"
          size="2xs"
          onClick={handleToggle}
          icon={<Close />}
          title="close title"
          color={color}
        />
      )}
    </Flex>
  )
}) as ForwardRefComponent<'div', AlertProps>

Alert.displayName = 'Alert'

export type { AlertProps } from './alert.type'
