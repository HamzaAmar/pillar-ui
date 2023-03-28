import { useControllableState } from '@pillar/hooks'

import { ToggleProps } from './toggle.type'

const Toggle = ({
  color = 'primary',
  label,
  size = 'xs',
  name,
  pressed: pressedProp,
  defaultPressed = false,
  onPressedChange,
  onClick,
  ...rest
}: ToggleProps) => {
  const [pressed = false, setPressed] = useControllableState<boolean>({
    controlledValue: pressedProp,
    defaultValue: defaultPressed,
  })

  function togglePress() {
    setPressed((current) => !current)
  }

  return (
    <button
      type="button"
      aria-pressed={pressed}
      className={`toggle toggle__${size} u_${color}`}
      // ref={toggleRef}
      name={name}
      onClick={togglePress}
      {...rest}
    />
  )
}

export default Toggle
