import { classnames } from '../../utils'
import { Flex, Text } from '..'
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
  color = 'indigo',
  ...rest
}: ProgressCircleProps) => {
  const progress = ((value - min) / (max - min)) * 100
  const circumference = 2 * Math.PI * 45 // Circumference based on the radius

  const dashOffset = circumference - (progress / 100) * circumference

  return (
    <div className={`circle-progress l_size-${size} u_${color}`} {...rest}>
      <svg className="circle-progress--svg" viewBox="0 0 100 100">
        <circle className="circle-progress--background" cx="50" cy="50" r="45" />
        <circle
          className={`circle-progress--bar`}
          cx="50"
          cy="50"
          r="45"
          strokeDasharray={circumference}
          strokeDashoffset={dashOffset}
        />
        <text fill="black" className="circle-progress--text" x="50" y="50">
          {progress}%
        </text>
      </svg>
    </div>
  )
}

export const ProgressBar = ({
  showValue,
  value,
  color = 'primary',
  size = 'md',
  label,
}: // className,
ProgressBarProps) => {
  return (
    <div className={`u_${color}`}>
      <Flex justify="end">
        <Text size={size} className={classnames({ 'u_visually-hidden': !showValue })}>
          {value}%
        </Text>
      </Flex>
      <div
        role="progressbar"
        aria-valuemax={100}
        aria-valuemin={0}
        aria-valuenow={value}
        aria-valuetext={`${value}%`}
        aria-label={label}
        className={`progress-bar l_size-${size}`}
      >
        <div className="progress-bar--inner" style={{ width: `${value}%` }} />
      </div>
    </div>
  )
}

const Item = ({ color = 'primary', value }: ProgressBarStackItemProps) => {
  return <div className={`progressbar-stack--item u_${color}`} style={{ width: `${value}%` }} />
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
      <Flex gap="2xs" className={`progress-bar progressbar-stack l_size-${size}`}>
        {children}
      </Flex>
      <Flex as="ul" wrap gap="md">
        {_children?.map(({ children, color }, index) => (
          <Flex items="center" gap="2xs" as="li" className={`progress-stack--list-item u_${color}`} key={index}>
            <Text as="span" color="slate" size="sm" contrast="low">
              {children}
            </Text>
          </Flex>
        ))}
      </Flex>
    </div>
  )
}

ProgressBarStack.Item = Item
