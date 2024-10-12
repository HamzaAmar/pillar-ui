import { cx } from '../cx'
import { Children, isValidElement } from 'react'

import type {
  ProgressCircleProps,
  ProgressBarProps,
  ProgressBarStackItemProps,
  ProgressBarStackProps,
} from './progress.type'

const circle = { cx: 50, cy: 50, r: 45 }

export const ProgressCircle = ({
  size = '5',
  min = 0,
  max = 100,
  value,
  label,
  color = 'p',
  ...rest
}: ProgressCircleProps) => {
  const progress = ((value - min) / (max - min)) * 100
  const _value = Number.isInteger(progress) ? progress : progress.toFixed(2)

  const circumference = 2 * Math.PI * 45 // Circumference based on the radius

  const dashOffset = circumference - (progress / 100) * circumference

  return (
    <div className={`pc- F-c Fs-${size} C-${color}`} {...rest}>
      <svg className="pc-S" viewBox="0 0 100 100">
        <circle className="pc-C" {...circle} />
        <circle className={`pc-B`} {...circle} strokeDasharray={circumference} strokeDashoffset={dashOffset} />
        <text fill="black" className="pc-T" x="50" y="50">
          {_value}%
        </text>
      </svg>
    </div>
  )
}

export const ProgressBar = ({
  showValue,
  value,
  color = 'p',
  size = '5',
  label,
  min = 0,
  max = 100,
}: ProgressBarProps) => {
  const MaxValue = Math.min(value, max)
  const progress = ((MaxValue - min) / (max - min)) * 100

  return (
    <div className={`C-${color}`}>
      <div className="fl- Ajc-end">
        <div className={cx(`Fs-${size}`, { 'H-sr': !showValue })}>{MaxValue}%</div>
      </div>
      <div
        role="progressbar"
        aria-valuemax={100}
        aria-valuemin={0}
        aria-valuenow={progress}
        aria-valuetext={`${progress}%`}
        aria-label={label}
        className={`pb- Fs-${size}`}
      >
        <div className="pb-T" style={{ width: `${progress}%` }} />
      </div>
    </div>
  )
}

export const ProgressBarStackItem = ({ color = 'p', value }: ProgressBarStackItemProps) => {
  return <div className={`pr-s_itm C-${color}`} style={{ width: `${value}%` }} />
}

export const ProgressBarStack = ({ size = '4', children }: ProgressBarStackProps) => {
  // TODO: Check IF you pass String If it can make an error
  const _children = Children.map(children, (child) => {
    if (!isValidElement(child)) return
    const { children, color } = child?.props
    return { children, color }
  })
  return (
    <div>
      <div className={`fl- Sg-2 pr-b pr-s Fs-${size}`}>{children}</div>
      <ul className="fl- Sg-5 fl-wrap">
        {_children?.map(({ children, color }, index) => (
          <li className={`pr-s_cnt fl- Aai-center Sg-2 C-${color}`} key={index}>
            <span className="Cb t-y-low Fs-4">{children}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

export type {
  ProgressBarProps,
  ProgressBarStackProps,
  ProgressBarStackItemProps,
  ProgressCircleProps,
} from './progress.type'
