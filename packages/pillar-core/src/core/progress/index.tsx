import { cx } from '../utils'
import { Children, isValidElement } from 'react'
import type {
  ProgressCircleProps,
  ProgressBarProps,
  ProgressBarStackItemProps,
  ProgressBarStackProps,
} from './progress.type'

const circle = { cx: 50, cy: 50, r: 45 }

export const ProgressCircle = ({
  size = 'md',
  min = 0,
  max = 100,
  value,
  label,
  color = 'pri',
  ...rest
}: ProgressCircleProps) => {
  const progress = ((value - min) / (max - min)) * 100
  const _value = Number.isInteger(progress) ? progress : progress.toFixed(2)

  const circumference = 2 * Math.PI * 45 // Circumference based on the radius

  const dashOffset = circumference - (progress / 100) * circumference

  return (
    <div className={`pr-c u_center u_f-${size} u_${color}`} {...rest}>
      <svg className="pr-c_svg" viewBox="0 0 100 100">
        <circle className="pr-c_background" {...circle} />
        <circle className={`pr-c_bar`} {...circle} strokeDasharray={circumference} strokeDashoffset={dashOffset} />
        <text fill="black" className="pr-c_txt" x="50" y="50">
          {_value}%
        </text>
      </svg>
    </div>
  )
}

export const ProgressBar = ({
  showValue,
  value,
  color = 'pri',
  size = 'md',
  label,
  min = 0,
  max = 100,
}: ProgressBarProps) => {
  const MaxValue = Math.min(value, max)
  const progress = ((MaxValue - min) / (max - min)) * 100

  return (
    <div className={`u_${color}`}>
      <div className="f-l u_jus-end">
        <div className={cx(`u_f-${size}`, { ' u_sr': !showValue })}>{MaxValue}%</div>
      </div>
      <div
        role="progressbar"
        aria-valuemax={100}
        aria-valuemin={0}
        aria-valuenow={progress}
        aria-valuetext={`${progress}%`}
        aria-label={label}
        className={`pr-b u_f-${size}`}
      >
        <div className="pr-b_inner" style={{ width: `${progress}%` }} />
      </div>
    </div>
  )
}

export const ProgressBarStackItem = ({ color = 'pri', value }: ProgressBarStackItemProps) => {
  return <div className={`pr-s_itm u_${color}`} style={{ width: `${value}%` }} />
}

export const ProgressBarStack = ({ size = 'sm', children }: ProgressBarStackProps) => {
  // TODO: Check IF you pass String If it can make an error
  const _children = Children.map(children, (child) => {
    if (!isValidElement(child)) return
    const { children, color } = child?.props
    return { children, color }
  })
  return (
    <div>
      <div className={`f-l u_gap-2xs pr-b pr-s u_f-${size}`}>{children}</div>
      <ul className="f-l u_gap-md l_fl-wrap">
        {_children?.map(({ children, color }, index) => (
          <li className={`pr-s_cnt f-l u_it-center u_gap-2xs u_${color}`} key={index}>
            <span className="u_bg t-y-low u_f-sm">{children}</span>
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
