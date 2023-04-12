import { useControllableState } from '@pillar/hooks'

import { SwitchProps } from './switch.type'
import { forwardRef } from 'react'
import { ForwardRefComponent } from '../../types/polymorphic.type'
import { classnames } from '../../utils'

// TODO: Try to add Switch Variant

const Switch = forwardRef((props, ref) => {
  const {
    color = 'primary',
    size = 'md',
    corner = 'full',
    label,
    name,
    pressed: pressedProp,
    defaultPressed = false,
    onPressedChange,
    onClick,
    className,
    ...rest
  } = props
  const [pressed = false, setPressed] = useControllableState<boolean>({
    controlledValue: pressedProp,
    defaultValue: defaultPressed,
  })

  function switchPress() {
    setPressed((current) => !current)
  }

  const _className = classnames(`switch l_size-${size} l_corner-${corner} u_${color}`, { [className!]: !!className })

  return (
    <button
      ref={ref}
      type="button"
      aria-pressed={pressed}
      className={_className}
      name={name}
      onClick={switchPress}
      {...rest}
    />
  )
}) as ForwardRefComponent<'button', SwitchProps>

Switch.displayName = 'Pillar-Switch'

export default Switch
