'use client'
import { context } from '../provider'

import type { TimelineContextProps, TimelineItemProps, TimelineProps } from './timeline.type'

const [TimelineProvider, useTimeline] = context<TimelineContextProps>({
  name: 'Timeline',
  required: true,
})

export const TimelineItem = (props: TimelineItemProps) => {
  const context = useTimeline()
  const {
    children,
    corner = context?.corner ?? '2',
    variant = 'mixed',
    line = context?.line ?? 'solid',
    color = context?.color ?? 'b',
    content,
  } = props

  return (
    <div className={`ti-I Sg-4 ti-I-${line}`}>
      <div className={`ti-L C-${color}`}>
        <div className={`ti-B R-${corner} V-${variant} F-c`}>{content}</div>
      </div>
      <div className="ti-C">{children}</div>
    </div>
  )
}

export const Timeline = ({ size = '4', children, ...rest }: TimelineProps) => {
  return (
    <div className={`ti- Fs-${size}`}>
      <TimelineProvider {...rest}>{children}</TimelineProvider>
    </div>
  )
}

export type {
  TimelineContextProps,
  TimelineBase,
  TimelineContextProviderProps,
  TimelineItemProps,
  TimelineProps,
} from './timeline.type'
