import { forwardRef, useState } from 'react'
import { ForwardRefComponent } from '../../types/polymorphic.type'
import { createContext } from '@pillar-ui/utils'

import type {
  SliderContextProps,
  SliderMarkProps,
  SliderProps,
  SliderThumbProps,
  SliderTrackProps,
} from './slider.type'

const [SliderProvider, useSliderContext] = createContext<SliderContextProps>('TooltipRoot')

/*
====================================================================================================
    Slider Track Component
====================================================================================================
*/

const SliderTrack = forwardRef(({ children }) => {
  return <div className="slider-track">{children}</div>
}) as ForwardRefComponent<'div', SliderTrackProps>

SliderTrack.displayName = 'Pillar-SliderTrack'

/*
====================================================================================================
    Slider Thumb Component
====================================================================================================
*/

const SliderThumb = forwardRef(() => {
  const { onValueChange } = useSliderContext() ?? {}

  function handleClick() {
    onValueChange?.(10)
  }

  return <button onClick={handleClick} aria-label="hello" type="button" className="slider-thumb" />
}) as ForwardRefComponent<'button', SliderThumbProps>

SliderThumb.displayName = 'Pillar-SliderThumb'

/*
====================================================================================================
    Slider Mark Component
====================================================================================================
*/

const SliderMark = forwardRef(({ label, value }) => {
  return (
    <div className="slider-mark" style={{ left: `${value}%` }}>
      {label}
    </div>
  )
}) as ForwardRefComponent<'div', SliderMarkProps>

SliderMark.displayName = 'Pillar-SliderMark'

export const Slider = forwardRef((props, ref) => {
  let {
    children,
    color,
    min,
    max,
    step = 1,
    pushThumbs = false,
    orientation = 'horizontal',
    defaultValue,
    label,
    ...rest
  } = props
  const [value, setValue] = useState(defaultValue || min)

  function handleChange() {}

  const contextValue = {
    value,
    min,
    max,
    handleChange,
  }

  return (
    <SliderProvider {...contextValue}>
      <div
        ref={ref}
        aria-label={props['aria-label'] || label}
        role="slider"
        aria-valuemin={min}
        aria-valuemax={max}
        aria-valuenow={value}
        aria-orientation={orientation}
        className={`slider u_${color}`}
      >
        {children}
      </div>
    </SliderProvider>
  )
}) as ForwardRefComponent<'div', SliderProps> & { Track: typeof SliderTrack; Thumb: typeof SliderThumb }

Slider.displayName = 'Pillar-Slider'
