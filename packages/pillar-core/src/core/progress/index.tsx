import { classnames } from '@pillar-ui/utils'
import { Flex } from '../flex'
import { Text } from '../typography'
import { Children, isValidElement } from 'react'
import type {
  ProgressCircleProps,
  ProgressBarProps,
  ProgressBarStackItemProps,
  ProgressBarStackProps,
} from './progress.type'

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
        <circle className="pr-c_background" cx="50" cy="50" r="45" />
        <circle
          className={`pr-c_bar`}
          cx="50"
          cy="50"
          r="45"
          strokeDasharray={circumference}
          strokeDashoffset={dashOffset}
        />
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
      <Flex justify="end">
        <div className={classnames(`u_f-${size}`, { ' u_sr': !showValue })}>{MaxValue}%</div>
      </Flex>
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
    if (!isValidElement(child)) {
      return
    }
    const { children, ...rest } = child?.props
    return { children, color: rest.color }
  })
  return (
    <div className="l_flow-sm">
      <Flex gap="2xs" className={`pr-b pr-s u_f-${size}`}>
        {children}
      </Flex>
      <Flex as="ul" wrap gap="md">
        {_children?.map(({ children, color }, index) => (
          <Flex items="center" gap="2xs" as="li" className={`pr-s_cnt u_${color}`} key={index}>
            <Text as="span" color="bg" size="sm" contrast="low">
              {children}
            </Text>
          </Flex>
        ))}
      </Flex>
    </div>
  )
}

export type {
  ProgressBarProps,
  ProgressBarStackProps,
  ProgressBarStackItemProps,
  ProgressCircleProps,
} from './progress.type'
