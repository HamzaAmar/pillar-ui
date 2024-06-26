import { useControllableState } from '@pillar-ui/hooks'

import { SwitchProps } from './switch.type'
import { forwardRef } from 'react'
import { ForwardRefComponent } from '../../types/polymorphic.type'
import { classnames } from '@pillar-ui/utils'

// TODO: Try to add Switch Variant

export const Switch = forwardRef((props, ref) => {
  const {
    color = 'primary',
    size,
    corner,
    label,
    name,
    pressed: pressedProp,
    defaultPressed = false,
    onPressedChange,
    className,
    ...rest
  } = props
  const [pressed, setPressed] = useControllableState<boolean>({
    controlledValue: pressedProp,
    defaultValue: defaultPressed ?? false,
  })

  function switchPress() {
    if (pressedProp != undefined && onPressedChange != undefined) {
      onPressedChange()
      return
    }
    setPressed((current) => !current)
  }

  const classNames = classnames(`switch u_${color}`, {
    [className!]: !!className,
    [`u_corner-${corner}`]: !!corner,
    [`u_size-${size}`]: !!size,
  })

  return (
    <button
      ref={ref}
      type="button"
      aria-pressed={pressed}
      className={classNames}
      name={name}
      onClick={switchPress}
      {...rest}
    />
  )
}) as ForwardRefComponent<'button', SwitchProps>

Switch.displayName = 'Pillar-Switch'

export type { SwitchProps } from './switch.type'
