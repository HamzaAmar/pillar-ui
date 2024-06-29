import { createContext } from '@pillar-ui/utils'
import { Flex } from '../flex'
import { Grid } from '../grid'

import type { TimelineContextProps, TimelineItemProps, TimelineProps } from './timeline.type'

const [TimelineProvider, useTimeline] = createContext<TimelineContextProps>({
  name: 'Timeline',
  isContextRequired: true,
})

export const TimelineItem = (props: TimelineItemProps) => {
  const context = useTimeline()
  const { children, corner = context?.corner ?? 'circle', variant = context?.variant ?? 'solid', bullet } = props

  return (
    <Grid grid="1.25em 1fr" gap="sm" className={`timeline--item  timeline--item__${variant}`}>
      <div className="timeline--line">
        <Flex justify="center" items="center" className={`timeline--bullet u_corner-${corner}`}>
          {bullet}
        </Flex>
      </div>
      <div className="timeline--content">{children}</div>
    </Grid>
  )
}

export const Timeline = ({ color = 'surface', size = 'sm', children, ...rest }: TimelineProps) => {
  return (
    <div className={`timeline u_size-${size} u_${color}`}>
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
