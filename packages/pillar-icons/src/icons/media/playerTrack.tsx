import { Svg } from '../../shared/svg'
import type { SvgType } from '../../type'

const path = <path d="M3 5v14l8-7-8-7ZM14 5v14l8-7-8-7Z" />

export const PlayerTrackNext = (props: SvgType) => <Svg {...props}>{path}</Svg>

export const PlayerTrackPrevious = (props: SvgType) => (
  <Svg transform={`rotate(180)`} {...props}>
    {path}
  </Svg>
)
