import { classnames } from '../../utils'
import { Flex, Text } from '..'
import { Children, isValidElement } from 'react'
import type {
  ProgressCircleProps,
  ProgressBarProps,
  ProgressBarStackItemProps,
  ProgressBarStackProps,
} from './progress.type'

const sizes = {
  '3xs': 32,
  '2xs': 49,
  xs: 66,
  sm: 84,
  md: 100,
  lg: 125,
  xl: 150,
  '2xl': 175,
  '3xl': 200,
} as const

export const ProgressCircle = ({ size = 'md', value, label, color = 'indigo', ...rest }: ProgressCircleProps) => {
  const progressSize = sizes[size]
  const progressHalf = progressSize / 2

  const radius = progressHalf - 5
  const circumference = progressSize * Math.PI
  const progress = (value / 100) * circumference

  return (
    <Flex justify="center" items="center" className={`progress-circle u_${color}`} {...rest}>
      <svg
        role="progressbar"
        aria-valuenow={value}
        aria-valuemax={100}
        aria-valuemin={100}
        aria-label={`Progress : ${value}%`}
        viewBox={`0 0 ${progressSize} ${progressSize}`}
        width={progressSize}
        height={progressSize}
      >
        <circle className="progress-circle__background" r={radius} cx={progressHalf} cy={progressHalf} />
        <circle
          className="progress-circle__progress"
          r={radius}
          cx={progressHalf}
          cy={progressHalf}
          strokeDasharray={circumference}
          strokeDashoffset={circumference - progress}
        />
        <text
          x={progressHalf}
          y={progressHalf}
          className="progress-circle__text"
          textAnchor="middle"
          dominantBaseline="central"
        >
          {value}%
        </text>
      </svg>
    </Flex>
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
        <Text size={size} className={classnames({ 'u_sr-only': !showValue })}>
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
