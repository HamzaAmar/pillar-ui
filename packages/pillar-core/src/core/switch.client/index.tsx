import { useControllableState } from '@pillar-ui/hooks'
import { SwitchProps } from './switch.type'
import { forwardRef } from 'react'
import { ForwardRefComponent } from '../../types/polymorphic.type'
import { cx } from '../cx'

// TODO: Try to add Switch Variant

export const Switch = forwardRef(
  (
    {
      color = 'pri',
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
      defaultValue: defaultPressed ?? false,
    })

    function switchPress() {
      if (pressedProp != undefined && onPressedChange != undefined) onPressedChange()
      else setPressed((current) => !current)
    }

    const classNames = cx(`s-w u_${color}`, {
      [`u_rad-${corner}`]: !!corner,
      [`u_f-${size}`]: !!size,
      [className!]: !!className,
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
