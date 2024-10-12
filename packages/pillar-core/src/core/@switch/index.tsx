import { useControllableState } from '@pillar-ui/hooks'
import { forwardRef } from 'react'
import { cx } from '../cx'

import type { SwitchProps } from './switch.type'
import type { ForwardRefComponent } from '../../types/polymorphic.type'
// TODO: Try to add Switch Variant

export const Switch = forwardRef(
  (
    {
      color = 'p',
      size,
      corner,
      label,
      name,
      pressed: pressedProp,
      defaultPressed = false,
      onPressedChange,
      className,
      ...rest
    },
    ref
  ) => {
    const [pressed, setPressed] = useControllableState<boolean>({
      controlledValue: pressedProp,
      defaultValue: defaultPressed,
    })

    function switchPress() {
      if (pressedProp != undefined && onPressedChange != undefined) onPressedChange()
      else setPressed((current) => !current)
    }

    const classNames = cx(`sw- C-${color}`, {
      [`R-${corner}`]: corner,
      [`Fs-${size}`]: size,
      [className!]: className,
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
  }
) as ForwardRefComponent<'button', SwitchProps>

Switch.displayName = 'Switch'

export type { SwitchProps } from './switch.type'
