import { Grid } from '../grid'
import { context } from '../@provider'

import type { TimelineContextProps, TimelineItemProps, TimelineProps } from './timeline.type'

const [TimelineProvider, useTimeline] = context<TimelineContextProps>({
  name: 'Timeline',
  required: true,
})

export const TimelineItem = (props: TimelineItemProps) => {
  const context = useTimeline()
  const { children, corner = context?.corner ?? 'circle', variant = context?.variant ?? 'solid', bullet } = props

  return (
    <Grid grid="1.25em 1fr" gap="4" className={`ti-I  ti-I-${variant}`}>
      <div className="ti-L">
        <div className={`ti-B R-${corner} F-c`}>{bullet}</div>
      </div>
      <div>{children}</div>
    </Grid>
  )
}

export const Timeline = ({ color = 'b', size = '4', children, ...rest }: TimelineProps) => {
  return (
    <div className={`ti- Fs-${size} C-${color}`}>
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
