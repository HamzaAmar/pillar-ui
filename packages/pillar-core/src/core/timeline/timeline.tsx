import { Flex, Grid } from '..'
import { TimelineProvider, useTimeline } from './timeline.context'

import type { TimelineItemProps, TimelineProps } from './timeline.type'

const Item = (props: TimelineItemProps) => {
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

const timeline = ({ color = 'surface', size = 'sm', children, ...rest }: TimelineProps) => {
  return (
    <div className={`timeline u_size-${size} u_${color}`}>
      <TimelineProvider {...rest}>{children}</TimelineProvider>
    </div>
  )
}

timeline.Item = Item

export default timeline
