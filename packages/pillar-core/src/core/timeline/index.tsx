import { context } from '../utils'
import { Flex } from '../flex'
import { Grid } from '../grid'

import type { TimelineContextProps, TimelineItemProps, TimelineProps } from './timeline.type'

const [TimelineProvider, useTimeline] = context<TimelineContextProps>({
  name: 'Timeline',
  isRequired: true,
})

export const TimelineItem = (props: TimelineItemProps) => {
  const context = useTimeline()
  const { children, corner = context?.corner ?? 'circle', variant = context?.variant ?? 'solid', bullet } = props

  return (
    <Grid grid="1.25em 1fr" gap="sm" className={`t-i_itm  t-i_itm-${variant}`}>
      <div className="t-i_line">
        <Flex justify="center" items="center" className={`t-i_bullet u_rad-${corner}`}>
          {bullet}
        </Flex>
      </div>
      <div>{children}</div>
    </Grid>
  )
}

export const Timeline = ({ color = 'bg', size = 'sm', children, ...rest }: TimelineProps) => {
  return (
    <div className={`t-i u_f-${size} u_${color}`}>
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
